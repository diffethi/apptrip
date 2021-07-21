
//let favoriteCityId="rome"
    
//console.log(favoriteCityId);
    

//exports.favoriteCityId = this.favoriteCityId;


    let favoriteCityId = 'rome'
    
    console.log(favoriteCityId); 

    favoriteCityId='paris'
    console.log(favoriteCityId);

    const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
    console.log(citiesId)

   // cityId=[];
    //console.log(cityId)

     citiesId.push("tokyo")
     console.log(citiesId)

    function getWeather(citiesId){
        let city=citiesId
        let temperature=20
       
        return {"city":city,"temperature":temperature}
        
        
        }
    const weather=getWeather(favoriteCityId.toUpperCase());
    console.log(weather)

    let {city:maville,temperature:temp}=weather;

    console.log(maville)
    console.log(temp)

    let [parisId,nycId,...othersId]=citiesId
    console.log(parisId);

    console.log(nycId);

    console.log(othersId.length);


    class Trip {
        constructor(id, name, imageUrl,price) {
            this._id = id;
            this._name = name;
            this._imageUrl=imageUrl;
            this._price=price;
            }

        get id(){
            return this._id
        }
        set id(newId){
            this._id=newId
        }
        get name(){
            return this._name
        }
        set name(newName){
            this._name=newName
        }

        get imageUrl(){
            return this._imageUrl

        }
        set imageUrl(newImageUrl){
            this._imageUrl=newImageUrl
        }

        get price(){
            return this._price

        }
        set price(newPrice){
            this._price=newPrice
        }

         toString() {
            return "Trip{" +
                    "id=" + this._id +
                    ", name='" + this._name + '\'' +
                    ", imageUrl='" + this._imageUrl + '\'' +
                    ",price='"+ this._price +'\'' +
                    //",parisTrip='" + parisTrip +'\'' +
                    '}';
        }

        static getDefaultTrip(){
            return new Trip('rio-de-janeiro','rio de janeiro','rio-de-janeiro.jpg',50)
        }

        //getMyCty(){
         //   return [id,name,imageUrl,price]
       // }
                
    }    
        
    parisTrip=new Trip('paris','paris','img/paris.jpg',100);

        console.log(parisTrip.toString())

        let defaultTrip=Trip.getDefaultTrip()
        console.log(defaultTrip.toString())
    

    class FreeTrip extends Trip{
        constructor(id,name,imageUrl,price,free){
            super(id,name,imageUrl,price)
            this.free=free;
        }

        toString(){
            return this.free + super.toString()
        }
               
    }
    
    let freeTrip=new FreeTrip('nantes','nantes','img/nantes.jpg',0)
    console.log(freeTrip.toString())

//////////////////////////////////////////////////////////////////////////////////:
    class TripService extends Trip{
        constructor(id,name,imageUrl,price) {
            super (id,name,imageUrl,price);

            const set = new Set();
        set.add= ( new Trip('paris', 'Paris', 'img/paris.jpg'));
        set.add=(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        set.add=(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));

        // TODO Set of 3 trips
        
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        }

        
        
        findByName(tripName) {
        return new Promise((resolve, reject) => {
        setTimeout(function ()  {
            if ()
        // ici l'exécution du code est asynchrone
        // TODO utiliser resolve et reject en fonction du résultat de la recherche
        }, 2000)
        });
        }
        }
        class PriceService {
        constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price == 100
        // 'rio-de-janeiro' --> price == 800)
        // no price for 'nantes'
        }
        findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
        setTimeout( () => {
        // ici l'exécution du code est asynchrone
        // TODO utiliser resolve et reject en fonction du résultat de la recherche
        }, 2000)
        });
        }
        }




