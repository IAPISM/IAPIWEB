function sendDataToGoogleSheets(formData, googleSheetsApiUrl) {
  return fetch(googleSheetsApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Agrega aquí las cabeceras necesarias para la autenticación (si es necesario)
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    console.log("Respuesta de la API:", data);

    if (data.success) {
      alert("Datos guardados correctamente");
      // Aquí podrías realizar más acciones si es necesario
    } else {
      alert("Error al enviar los datos. Por favor, inténtalo de nuevo más tarde.");
    }
  })
  .catch(error => {
    console.error("Error al enviar los datos:", error);
    alert("Ocurrió un error al enviar los datos. Por favor, inténtalo de nuevo más tarde.");
  });
}
