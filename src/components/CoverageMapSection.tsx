import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const CoverageMapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Brazil
    const map = L.map(mapRef.current, {
      center: [-15.7801, -47.9292], // Brasília - center of Brazil
      zoom: 4,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles (free, no API key needed)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Custom marker icon
    const customIcon = L.divIcon({
      className: "custom-marker",
      html: `<div class="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    // Headquarters marker - Várzea Grande, MT
    const hqMarker = L.marker([-15.6469, -56.1327], { icon: customIcon }).addTo(map);
    hqMarker.bindPopup(
      `<div class="text-center p-2">
        <strong class="text-teal-700">AGRAGEO - Sede</strong><br/>
        <span class="text-sm text-gray-600">Várzea Grande, MT</span>
      </div>`
    );

    // Coverage circle representing national coverage
    L.circle([-15.7801, -47.9292], {
      color: "hsl(173, 58%, 39%)",
      fillColor: "hsl(173, 58%, 39%)",
      fillOpacity: 0.1,
      radius: 2500000, // 2500km radius - covers most of Brazil
      weight: 2,
      dashArray: "10, 5",
    }).addTo(map);

    // Sample project markers in different regions
    const projectLocations = [
      { coords: [-3.7172, -38.5433] as [number, number], city: "Fortaleza, CE" },
      { coords: [-23.5505, -46.6333] as [number, number], city: "São Paulo, SP" },
      { coords: [-22.9068, -43.1729] as [number, number], city: "Rio de Janeiro, RJ" },
      { coords: [-19.9167, -43.9345] as [number, number], city: "Belo Horizonte, MG" },
      { coords: [-12.9714, -38.5014] as [number, number], city: "Salvador, BA" },
      { coords: [-25.4284, -49.2733] as [number, number], city: "Curitiba, PR" },
      { coords: [-30.0346, -51.2177] as [number, number], city: "Porto Alegre, RS" },
      { coords: [-8.0476, -34.877] as [number, number], city: "Recife, PE" },
      { coords: [-1.4558, -48.4902] as [number, number], city: "Belém, PA" },
      { coords: [-3.1019, -60.025] as [number, number], city: "Manaus, AM" },
      { coords: [-16.6869, -49.2648] as [number, number], city: "Goiânia, GO" },
      { coords: [-20.4697, -54.6201] as [number, number], city: "Campo Grande, MS" },
    ];

    const smallIcon = L.divIcon({
      className: "small-marker",
      html: `<div class="w-3 h-3 bg-navy-600 rounded-full border border-white shadow"></div>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    });

    projectLocations.forEach((loc) => {
      const marker = L.marker(loc.coords, { icon: smallIcon }).addTo(map);
      marker.bindPopup(
        `<div class="text-center p-1">
          <span class="text-sm font-medium text-gray-700">Área de atuação</span><br/>
          <span class="text-xs text-gray-500">${loc.city}</span>
        </div>`
      );
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="cobertura" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-sm mb-6">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">Cobertura Nacional</span>
          </div>
          <h2 className="heading-section mb-4">
            Atuação em Todo o{" "}
            <span className="text-gradient-nature">Território Nacional</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Com sede em Várzea Grande/MT, atendemos projetos em todas as regiões do Brasil, 
            com expertise especial nos biomas Cerrado e Pantanal.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-lg overflow-hidden shadow-elevated border border-border/50">
          <div
            ref={mapRef}
            className="w-full h-[500px] md:h-[600px]"
            style={{ background: "hsl(var(--muted))" }}
          />
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/50 z-[1000]">
            <h4 className="font-semibold text-sm mb-3 text-foreground">Legenda</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-teal-600 rounded-full border-2 border-white shadow"></div>
                <span className="text-xs text-muted-foreground">Sede - Várzea Grande/MT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-navy-600 rounded-full border border-white shadow"></div>
                <span className="text-xs text-muted-foreground">Áreas de atuação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 border border-dashed border-teal-600"></div>
                <span className="text-xs text-muted-foreground">Cobertura nacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="text-center p-6 bg-background rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-teal-600 mb-1">27</div>
            <div className="text-sm text-muted-foreground">Estados atendidos</div>
          </div>
          <div className="text-center p-6 bg-background rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-teal-600 mb-1">5</div>
            <div className="text-sm text-muted-foreground">Regiões do Brasil</div>
          </div>
          <div className="text-center p-6 bg-background rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-teal-600 mb-1">MT</div>
            <div className="text-sm text-muted-foreground">Sede em Mato Grosso</div>
          </div>
          <div className="text-center p-6 bg-background rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-teal-600 mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Território nacional</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMapSection;
