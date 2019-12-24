const customCardMenus = document.querySelectorAll('.custom-card ul.menus')
	    	
    	document.addEventListener('click', function(e){

    		if(e.target.dataset.open)
    		{

    			const tripleDots = e.target
    			const tripleDotsClass = tripleDots.dataset.open
    			const menu = tripleDots.nextElementSibling

    			if(menu.classList.contains('open-menu'))
    			{
    				menu.classList.remove('open-menu')
    			}
    			else
    			{
    				menu.classList.add('open-menu')
    			}

    		}
    		else if(e.target.classList.contains('open-menu'))
    		{

    			return

    		}
    		else
    		{


    			customCardMenus.forEach(menu => {

    				menu.classList.remove('open-menu')

    			})

    		}

    	})

        // google.charts.load('current', {'packages' : ['corechart']})

        // google.charts.setOnLoadCallback(drawChart)

        // function drawChart(){

        //     let data = new google.visualization.DataTable()

        //     data.addColumn('string', 'Topping')
        //     data.addColumn('number', 'Slices')
        //     data.addRows([
        //         ['Sudah Dinilai', 4],
        //         ['Belum Dinilai', 6]
        //     ])

        //     var options = {
        //         'width' : 400,
        //         'height' : 300,
        //         'backgroundColor' : 'transparent'
        //     }

        //     var chart = new google.visualization.PieChart(document.getElementById('pie'))
        //     chart.draw(data, options)

        // }