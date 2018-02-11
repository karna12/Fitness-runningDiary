$(document).one('pageinit', function() {
    
    //Add Handler
    $('#submitAdd').on('tap', addRun);
    
    //Add run function
    
    function addRun(){
        
        // get form value
        
        var miles = $('#addMiles').val();
        var date = $('#adddate').val();
        
        // create run object
        
        var run = {
            
            
            date: date,
            miles: parseFloat(miles)
            
        };
        
        var runs = getRunsObject();
        
        //ad runs to runs array
        
        runs.push(run);
        
        alert('Run Added');
        
        // set string feild object to local storage
        
        localStorage.setItem('runs', JSON.stringify(runs));
        
        //redirect to index
        window.location.href = "index.html";
        
        return false;
    }
        
        
        
        
        function getRunsObject(){
            
            
            // Set runs array
            
            var runs = new Array();
            
            // get current runs from localstorage
            
            var currentRuns = localStorage.getItem('runs');
            
            
            // Check loal storage
            
            if (currentRuns != mull){
                // set to runs
                
                var runs = JSON.parse(currentRuns);
                
                
            }
            
            // return runs object
            
            return runs.sort(function(a,b) { return new Date (b.date) - new Date (a.date)});
            
            
            
        }
        
    }
});