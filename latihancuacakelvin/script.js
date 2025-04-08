fetch('https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=16.71.18.1001')
.then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('weather-data');
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = 
        <li>
               ${item.desa}
            ${item.delapanIlir}
            ${item.kecamatan}
            ${item.ilirTimurTiga}
            ${item.kotaKabupaten}
            ${item.provinsi}
            ${item.waktu}
            ${item.kondisiCuaca}
        </li>
        
         
        
    });
})
