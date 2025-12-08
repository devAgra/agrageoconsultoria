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
      center: [-14.235, -51.9253], // Geographic center of Brazil
      zoom: 4,
      scrollWheelZoom: true,
      zoomControl: true,
      dragging: true,
      touchZoom: true,
      doubleClickZoom: true,
    });

    mapInstanceRef.current = map;

    // Technical CartoDB Positron tiles for cleaner look
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map);

    // Custom HQ marker icon - more technical/angular
    const customIcon = L.divIcon({
      className: "custom-marker",
      html: `<div style="width: 36px; height: 36px; background: linear-gradient(135deg, hsl(173, 58%, 39%), hsl(173, 58%, 29%)); display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
    });

    // Headquarters marker - Várzea Grande, MT
    const hqMarker = L.marker([-15.6469, -56.1327], { icon: customIcon }).addTo(map);
    hqMarker.bindPopup(
      `<div style="text-align: center; padding: 8px; font-family: 'DM Sans', sans-serif;">
        <strong style="color: hsl(173, 58%, 39%); font-size: 14px;">AGRAGEO – Sede</strong><br/>
        <span style="font-size: 12px; color: #64748b;">Várzea Grande, MT</span>
      </div>`
    );

    // Coverage polygon for Brazil territory - more precise than circle
    L.circle([-14.235, -51.9253], {
      color: "hsl(173, 58%, 39%)",
      fillColor: "hsl(173, 58%, 39%)",
      fillOpacity: 0.08,
      radius: 4000000, // 4000km radius - covers entire Brazil
      weight: 2,
      dashArray: "8, 4",
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

    // Technical square marker for project locations
    const smallIcon = L.divIcon({
      className: "small-marker",
      html: `<div style="width: 10px; height: 10px; background: hsl(222, 47%, 31%); border: 1px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>`,
      iconSize: [10, 10],
      iconAnchor: [5, 5],
    });

    projectLocations.forEach((loc) => {
      const marker = L.marker(loc.coords, { icon: smallIcon }).addTo(map);
      marker.bindPopup(
        `<div style="text-align: center; padding: 4px; font-family: 'DM Sans', sans-serif;">
          <span style="font-size: 12px; font-weight: 600; color: hsl(222, 47%, 31%);">Área de Atuação</span><br/>
          <span style="font-size: 11px; color: #64748b;">${loc.city}</span>
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 mb-6">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Cobertura Nacional</span>
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
        <div className="relative overflow-hidden shadow-elevated border border-border/50">
          <div
            ref={mapRef}
            className="w-full h-[250px] md:h-[300px]"
            style={{ background: "hsl(var(--muted))" }}
          />
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm p-4 shadow-lg border border-border/50 z-[1000]">
            <h4 className="font-semibold text-sm mb-3 text-foreground">Legenda</h4>
          <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(173, 58%, 39%), hsl(173, 58%, 29%))" }}>
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs text-muted-foreground">Sede – Várzea Grande/MT</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[10px] h-[10px]" style={{ background: "hsl(222, 47%, 31%)", border: "1px solid white" }}></div>
                <span className="text-xs text-muted-foreground">Áreas de atuação</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-[2px] border-t-2 border-dashed border-teal-600"></div>
                <span className="text-xs text-muted-foreground">Cobertura nacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="text-center p-6 bg-background border border-border/50">
            <div className="text-3xl font-bold text-secondary mb-1">27</div>
            <div className="text-sm text-muted-foreground">Estados atendidos</div>
          </div>
          <div className="text-center p-6 bg-background border border-border/50">
            <div className="text-3xl font-bold text-secondary mb-1">5</div>
            <div className="text-sm text-muted-foreground">Regiões do Brasil</div>
          </div>
          <div className="text-center p-6 bg-background border border-border/50">
            <div className="text-3xl font-bold text-secondary mb-1">MT</div>
            <div className="text-sm text-muted-foreground">Sede em Mato Grosso</div>
          </div>
          <div className="text-center p-6 bg-background border border-border/50">
            <div className="text-3xl font-bold text-secondary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Território nacional</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMapSection;