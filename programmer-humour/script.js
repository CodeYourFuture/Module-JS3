async function fetchComic(){
    try {
        const response = await fetch('https://xkcd.now.sh/?comic=latest');
        const data = await response.json();
        
        // Log the received data to the console
        console.log(data);

        //render the comic img
        renderComic(data.img);
    } catch (error) {
        //handle errors
        console.error('Error fetching comic:', error);
    }
    }
}