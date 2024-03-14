import { setItem, getItem } from './utility.js';
export { tasks_reset };

const tasks_reset = [
  {
    id: 3,
    name: 'Học NodeJS',
    description: 'W3schools',
    status: 'inprogress',
  },
  {
    id: 4,
    name: 'Học ASP.NET',
    description: 'Có thể là trên youtube',
    status: 'inprogress',
  },
  {
    id: 5,
    name: 'Project ASP.NET',
    description: 'Làm một Mini Project trước khi dính skin',
    status: 'inreview',
  },
  {
    id: 6,
    name: 'App xem sim số đẹp',
    description: 'Xem sim số đẹp đang hoàn thiện',
    status: 'inreview',
  },
  {
    id: 7,
    name: 'App My CV',
    description: 'Sử dụng Local storage lưu dữ liệu',
    status: 'done',
  },
  {
    id: 8,
    name: 'Starclasses',
    description: 'Back end sử dụng Laravel 10.x',
    status: 'done',
  },
  {
    id: 9,
    name: 'My CV',
    description: 'Một trang web có thể edit my CV',
    status: 'todo',
  },
  {
    id: 1,
    name: 'My Sim',
    description: 'Xem sơ qua phong thuỷ sim',
    status: 'todo',
  },
  {
    id: 2,
    name: 'Học laravel',
    description: 'https://laravel.com/',
    status: 'done',
  },
  {
    id: 10,
    name: 'Thêm tính năng cho my Kanban',
    description: 'Import, export data ra file .json hoặc .txt',
    status: 'inreview',
  },
  {
    id: 11,
    name: 'My CV - Import Export',
    description: 'Import, export data ra file .json hoặc .txt',
    status: 'inreview',
  },
  {
    id: 12,
    name: 'Học MongoDB',
    description: 'Học và thực hành',
    status: 'todo',
  },
];

var tasks = getItem('tasks');

if (tasks == null) {
  setItem('tasks', tasks_reset);
}

const linear_gradient = [
  'linear-gradient(227deg, rgb(81, 255, 234) 0%, rgb(34, 186, 250) 100%)',
  'linear-gradient(225deg, rgb(255, 207, 80) 0%, rgb(255, 115, 52) 100%)',
  'linear-gradient(239deg, rgb(252, 71, 96) 0%, rgb(255, 103, 195) 100%)',
  'linear-gradient(316deg, rgb(75, 161, 252) 3%, rgb(236, 42, 237) 100%)',
];

const randomIndex = Math.floor(Math.random() * linear_gradient.length);
const randomGradient = linear_gradient[randomIndex];

$('body').css('--linear-gradient', randomGradient);
