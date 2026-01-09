document.addEventListener('DOMContentLoaded', function() {
    const Off_map = L.map('officer_map').setView([23.3441, 85.3096], 10);
    const governmentMap = L.map('gov_map').setView([22.0087, 86.4187], 10);
    const peopleMap = L.map('people_map').setView([20.5937, 78.9629], 10);
    const appl_map = L.map('officer_map_request').setView([23.2599, 77.4126], 10);

    const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    L.tileLayer(tileUrl, { attribution }).addTo(Off_map);
    L.tileLayer(tileUrl, { attribution }).addTo(governmentMap);
    L.tileLayer(tileUrl, { attribution }).addTo(peopleMap);
    L.tileLayer(tileUrl, { attribution }).addTo(appl_map);

    // Expose globally if needed
    window.officerMap = Off_map;
    window.governmentMap = governmentMap;
    window.peopleMap = peopleMap;
    window.appl_map  = appl_map;

    function generatelist(){
        const ul= document.querySelector('#request_list ul');
        data_list.forEach((application)=>{
            const li= document.createElement('li');
            const div= document.createElement('div');
            const a= document.createElement('a');
            const p= document.createElement('p');
            div.classList.add('application_list');
            li.classList.add(  'rounded-lg', 'shadow', 'bg-white','m-2');
             div.classList.add('flex', 'flex-col',
            'p-1', 'rounded-md', 'hover:bg-gray-100', 'cursor-pointer');
            a.innerHTML= "<span class='font-semibold'>Name:</span>" + application.properties.name;
            a.href='#';
            p.innerHTML="<span class='font-semibold'>ID:</span> "+application.properties.person_id;
            div.appendChild(a);
            div.appendChild(p);
            li.appendChild(div);
            ul.appendChild(li);

        })
    }
    generatelist()

    const applicationlayers=L.geoJSON(data_list, {
        pointToLayer:function(Feature,latlng){
            return L.marker(latlng);
        }
    })
    applicationlayers.addTo(appl_map)
});


