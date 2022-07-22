# Destinationizer App

In this app, I utlized the RoadGoat API to fetch data about destinations in the United States, such as their population sizes, "known for" attributes and their corresponding Airbnb, Kayak and GetYourGuide URLs. Users will be able to see two destinations' details at once and choose which destination they would like to book.

## Deployed Website Link

Open (http://destinationizer.com/) to view more.

## Screenshots of Portfolio
![Screenshot 1] <img width="1423" alt="Screen Shot 2022-07-22 at 9 25 56" src="https://user-images.githubusercontent.com/93743792/180484109-63f49ad9-06f3-4687-bb9e-a5216bf0cb68.png">


![Screenshot 2] <img width="1424" alt="Screen Shot 2022-07-22 at 9 30 54" src="https://user-images.githubusercontent.com/93743792/180483831-10295a7f-23d1-4f25-9ce3-9433e2f6062b.png">

![Screenshot 3] <img width="1428" alt="Screen Shot 2022-07-22 at 9 31 06" src="https://user-images.githubusercontent.com/93743792/180483954-59383d18-28bf-4a42-90ba-e2b34c5fdaf1.png">


## Wireframes

![Wireframe 1] <img width="769" alt="Form:Welcome Page Wireframe" src="https://user-images.githubusercontent.com/93743792/180484304-f3175bcc-b807-45e7-91a5-a3db3d0bcfc1.png">


![Wireframe 2] <img width="721" alt="Comparison Page Wireframe" src="https://user-images.githubusercontent.com/93743792/180484340-c6caa3f9-3423-44a7-a8f3-364676494663.png">


![Wireframe 3] <img width="799" alt="Booking Page Wireframe" src="https://user-images.githubusercontent.com/93743792/180484375-a9323a44-d051-4e03-a261-3180d089f3b5.png">


## Tech Stack

* React
* API
* React-Bootstrap/Bootstrap
* Javascript
* CSS


```js
const [city1Name, setCity1Name] = useState('');
    const [city1Attributes, setCity1Attributes] = useState();
    const [city1Population, setCity1Population] = useState('');
    const [city1Icons, setCity1Icons] = useState();
    
    
    
    const getCity1 = () => {
        if (city1) {
        let city1Arr = []
        let city1IconArr = []
        for (let i=0; i<city1.included.length; i++) {
            if (city1.included[i].type.includes('known_for')) {
                city1Arr.push(city1.included[i].attributes.name)
                city1IconArr.push(city1.included[i].attributes.icon)
            } 
        }
        setCity1Attributes(city1Arr);
        setCity1Icons(city1IconArr);

        let newCity1Name = city1.data.attributes.name;
        setCity1Name(newCity1Name)
        
        let newCity1Population = city1.data.attributes.population
        setCity1Population(newCity1Population);
        }
    }
  ```

## Approach

I started by breaking down my website into smaller parts - first by pages, then by components, trying to clearly understand which one needed states and props to pass or be passed. I made sure that my 

## User Stories 

✈️ As a potential traveler (individual or with a group/business team) who is deciding between two travel destinations, I want to be able to compare the two cities' qualities, so that I can choose the city I will travel to based on the qualities I am or my group is interested in/need.

✈️ As an Airbnb, Kayak or GetYourGuide user, I want to know more about my potential destinations before I search for lodging/flights/car rentals/tours/guides, so I know which city to type in these websites' search inputs.

✈️ As a travel site user, I want a home button to clear my previous searches, so that I can compare two other cities or one with another city.

✈️ As a travel site user, I want to be able to access booking sites to the corresponding city I choose, so that I can easily book lodging, flights, and any other potential travel essentials I need for my destination.



## Unsolved Problems / Major Hurdles

* Getting API images

## Future Stretch Goals 

* Add a custom error message for each error status
* Add an animation
