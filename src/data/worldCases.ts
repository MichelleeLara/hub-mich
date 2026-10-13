export type WorldLocation = { name:string; lon:number; lat:number };
// Project locations confirmed by Michelle. China is a country-level marker.
const mexico:WorldLocation={name:'Ciudad de México',lon:-99.1332,lat:19.4326};
const china:WorldLocation={name:'China',lon:104,lat:35};
export const worldCases = [
 { title:'AnamSeals', result:'$1M USD', label:'Ahorro anual proyectado', slug:'anamseals-firmware', locations:[mexico,china] },
 { title:'Inteligencia Logística', result:'+65%', label:'Rendimiento del mapa', slug:'inteligencia-logistica', locations:[mexico] },
 { title:'Monitoreo White-Label', result:'6 ingenieros', label:'Un lenguaje de arquitectura común', slug:'monitoreo-white-label', locations:[mexico] },
 { title:'Tracking Aduanal', result:'En vivo', label:'Monitoreo sin recargar la página', slug:'tracking-aduanal', locations:[mexico] },
];
