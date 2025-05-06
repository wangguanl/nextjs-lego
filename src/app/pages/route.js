import data from './data';
export async function GET(request) {
  // const searchParams = request.nextUrl.searchParams;
  // const query = searchParams.get('query');
  return Response.json(data);
}
