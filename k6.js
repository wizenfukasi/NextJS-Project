import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://nextjs-app-alexandeam-dev.apps.rm1.0a51.p1.openshiftapps.com/'; // Ganti dengan Route kamu

export let options = {
  stages: [
    { duration: '1m', target: 200
     },  // 10 users selama 1 menit
  ],
};

export default function () {
  http.get(BASE_URL);
  sleep(1);
}

3