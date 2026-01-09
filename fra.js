document.addEventListener('DOMContentLoaded', () => {
    function selectRole(role) { 
        // Hide popup 
        document.getElementById("roleModal").classList.add("hidden");

        // Hide all dashboards 
        document.querySelectorAll("#officer_view, #people_view, #government_view")
            .forEach(el => el.classList.add("hidden"));

        // Show selected dashboard 
        document.getElementById(role).classList.remove("hidden");

        if (role === "officer_view") { 
            document.getElementById("side_dashbds").classList.remove("hidden");
            document.getElementById("side_list").classList.remove("hidden"); 
            document.getElementById("side_reports").classList.remove("hidden"); 
            document.getElementById("officer_map").classList.remove("hidden"); 
            if (window.officerMap) { 
                setTimeout(() => window.officerMap.invalidateSize(), 200);
            } 
            document.getElementById("side_dashbds").addEventListener('click' , ()=>{
              document.getElementById("request_list_box").classList.add("hidden");
              document.getElementById("officer_map").classList.remove("hidden");
              document.getElementById("officer_map_request").classList.add("hidden");
            } );
            document.getElementById("side_list").addEventListener('click' , ()=>{
              document.getElementById("request_list_box").classList.remove("hidden");
              if (window.appl_map) { 
                setTimeout(() => window.appl_map.invalidateSize(), 200); 
              }
              document.getElementById("officer_map").classList.add("hidden");
              document.getElementById("officer_map_request").classList.remove("hidden");
            } );
        } else if (role === "people_view") { 
            document.getElementById("side_dashbds").classList.remove("hidden");
            document.getElementById("side_doc").classList.remove("hidden"); 
            if (window.peopleMap) { 
                setTimeout(() => window.peopleMap.invalidateSize(), 200); 
            } 
        } else if (role === "government_view") {
            document.getElementById("side_dashbds").classList.remove("hidden");
            document.getElementById("side_reports").classList.remove("hidden"); 
            if (window.governmentMap) {
                setTimeout(() => window.governmentMap.invalidateSize(), 200); 
            } 
        }
    } 

    // Show modal once DOM is ready
    document.getElementById("roleModal").classList.remove("hidden");

    // Make selectRole available to inline HTML
    window.selectRole = selectRole;

});