export async function virtual(city){
    try {
    const response =  await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=LS2EKW4SAVJ57SLAB837A7KFK&contentType=json`);
    const data =  await response.json();
    return data;
} catch (error) {
    console.error("Error fetching virtual data:", error);
}
}