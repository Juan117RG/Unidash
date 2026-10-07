// Los datos son simulados. Los ejemplos parcialmente visibles se completaron
// para mantener un archivo ejecutable; no representan servicios en tiempo real.
export const mockTasks = [
  {
    "id": "task-1",
    "title": "Entregar proyecto de programación",
    "description": "Revisar README y subir el repositorio.",
    "category": "Universidad",
    "priority": "high",
    "status": "pending",
    "dueDate": "2026-10-02"
  },
  {
    "id": "task-2",
    "title": "Estudiar para examen de redes",
    "description": "Repasar direccionamiento y servicios.",
    "category": "Universidad",
    "priority": "medium",
    "status": "pending",
    "dueDate": "2026-10-05"
  },
  {
    "id": "task-3",
    "title": "Preparar presentación",
    "description": "Terminar diapositivas para exposición.",
    "category": "Proyecto",
    "priority": "high",
    "status": "pending",
    "dueDate": "2026-10-08"
  },
  {
    "id": "task-4",
    "title": "Organizar apuntes",
    "description": "Clasificar los apuntes de la semana.",
    "category": "Personal",
    "priority": "low",
    "status": "completed",
    "dueDate": "2026-10-01"
  }
];

export const mockTransactions = [
  { id: 'tx-1', description: 'Beca', type: 'income', amount: 5000, category: 'Beca', date: '2026-10-01' },
  { id: 'tx-2', description: 'Proyecto freelance', type: 'income', amount: 3000, category: 'Trabajo', date: '2026-10-02' },
  { id: 'tx-3', description: 'Comida', type: 'expense', amount: 450, category: 'Comida', date: '2026-10-02' },
  { id: 'tx-4', description: 'Transporte', type: 'expense', amount: 300, category: 'Transporte', date: '2026-10-03' },
  { id: 'tx-5', description: 'Suscripciones', type: 'expense', amount: 199, category: 'Suscripciones', date: '2026-10-03' },
  { id: 'tx-6', description: 'Material universidad', type: 'expense', amount: 600, category: 'Universidad', date: '2026-10-04' },
];

export const mockRates = [
  { quote: 'USD', rate: 0.0580 },
  { quote: 'EUR', rate: 0.0540 },
  { quote: 'GBP', rate: 0.0465 },
  { quote: 'JPY', rate: 8.9700 },
  { quote: 'CAD', rate: 0.0780 },
];

export const mockLocation = { city: 'Guanajuato', region: 'Guanajuato', latitude: 21.02, longitude: -101.25 };
export const mockWeather = { icon: '☀️', temperature: 24, apparentTemperature: 25, description: 'Despejado' };
export const mockNews = [
  { title: 'Universidades fortalecen sus proyectos de innovación', description: 'Ejemplo de noticia para el diseño del panel.', source: { name: 'Noticias demo' } },
  { title: 'La inteligencia artificial transforma el aprendizaje', description: 'Contenido simulado para la interfaz.', source: { name: 'Tecnología demo' } },
  { title: 'Empresas buscan talento joven', description: 'Ejemplo de información universitaria.', source: { name: 'Empleo demo' } },
];
export const mockFinanceSeries = {
  labels: ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'],
  income: [8200, 9600, 8800, 10400, 10000, 11000],
  expense: [5100, 5900, 5400, 6100, 6200, 6500],
};
export const mockCurrencyHistory = {
  labels: ['01', '05', '10', '15', '20', '25', '30'],
  values: [0.0568, 0.0571, 0.0567, 0.0574, 0.0578, 0.0581, 0.0580],
};
