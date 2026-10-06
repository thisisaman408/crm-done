import axios from 'axios';
async function test() {
  try {
    const res = await axios.patch('http://localhost:3333/api/inventory/projects/12710b0b-03ec-4766-bd61-4c0a8e7fb42c', { status: 'READY_TO_MOVE' }, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(res.data);
  } catch (e) {
    console.error(e.response ? e.response.data : e.message);
  }
}
test();
