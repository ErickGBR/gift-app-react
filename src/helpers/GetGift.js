  
export const getGift= async(category)=>{

        let url =`https://api.giphy.com/v1/gifs/search?api_key=nMcGQSUGs4HqYojbE9qR1uuF1srBeiWm&q=${ encodeURI(category) }&limit=10`;
        
        let resp = await fetch(url)
        const {data} = await resp.json();

        const gifs = data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        })
        return gifs;
       //console.log(gifs)
    }
