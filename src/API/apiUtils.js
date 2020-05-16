export async function handleResponse(response) {
  if (response.ok) return response.json();
  else throw new Error('Invalid response');
}
export function handleError(error) {
  console.error(error);
}
