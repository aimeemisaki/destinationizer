# Destinationizer App

🤔 Wanting to find a destination before booking, but don't know which one to choose? 

🏝 This app allows users to compare destinations they are interested in and book from there!

💡 Users will be able to
* choose two destinations
* see two destinations' details at once
* access Airbnb, Kayak and GetYourGuide URLs corresponding to the destination they chose

## Deployed Website Link

Head over to (https://destinationizer.netlify.app/) to view more.

## Approach

I started by breaking down my website into smaller parts - first by pages, then by components, trying to clearly understand which one needed states and props to pass or be passed. A lot of time went into getting data from the RoadGoat API and learning React Bootstrap in our time constraint.

## Screenshot of App

<img width="1110" alt="Screen Shot 2022-09-21 at 0 48 05" src="https://user-images.githubusercontent.com/93743792/191304816-2e06a717-de69-4236-8acc-10b30a1e2ba7.png">

<img width="1109" alt="Screen Shot 2022-09-21 at 0 50 47" src="https://user-images.githubusercontent.com/93743792/191305414-87c8d29e-fd5b-4648-b71e-dfdd6f1aa3f9.png">

<img width="1441" alt="Screen Shot 2022-09-21 at 1 00 38" src="https://user-images.githubusercontent.com/93743792/191309483-b5302133-6e6b-4599-9736-2e68efb5f975.png">

<img width="323" alt="Screen Shot 2022-09-21 at 0 08 12" src="https://user-images.githubusercontent.com/93743792/191309304-b70bf390-34a7-4b67-b663-72f7e92a9482.png">
<img width="324" alt="Screen Shot 2022-09-21 at 0 56 29" src="https://user-images.githubusercontent.com/93743792/191309369-7959141a-74c2-4d11-b5f3-0c7ca35b93a5.png">
<img width="323" alt="Screen Shot 2022-09-21 at 0 57 30" src="https://user-images.githubusercontent.com/93743792/191309543-1950df44-a24b-4633-a1d0-5a05fc000fec.png">


## Wireframes

![Wireframe 1] <img width="769" alt="Form:Welcome Page Wireframe" src="https://user-images.githubusercontent.com/93743792/180484304-f3175bcc-b807-45e7-91a5-a3db3d0bcfc1.png">


![Wireframe 2] <img width="721" alt="Comparison Page Wireframe" src="https://user-images.githubusercontent.com/93743792/180484340-c6caa3f9-3423-44a7-a8f3-364676494663.png">


![Wireframe 3] <img width="799" alt="Booking Page Wireframe" src="https://user-images.githubusercontent.com/93743792/180484375-a9323a44-d051-4e03-a261-3180d089f3b5.png">


## Tech Stack

* React Native
* Third-Party API (RoadGoat API)
* React-Bootstrap/Bootstrap
* Javascript 
* Tailwindcss


```js
function budgetNumFilter (input) {
   const keys = Object.keys(input.budget)
   const values = Object.values(input.budget)
   for (let i=0; i < keys.length; i++ ) {
     if (keys[i] === `${input.name}` ) {
       const budgetObjs = values[0]
       const budgetKeys = Object.keys(budgetObjs)
       const budgetValues = Object.values(budgetObjs)
       for (let j=0; j < budgetKeys.length; j++) {
         if (budgetKeys[j] === 'value') {
           return budgetValues[j]
         }
       }
     }
   }
 }
 
function fetchReducer(dispatch, endPoint, errorMessage) {
    const headers = {
        headers: {
            'Authorization': `Basic ${process.env.REACT_APP_AUTH_KEY}`
        }
    }
    dispatch({ type: 'loading'})
        fetch(`https://api.roadgoat.com/api/v2/destinations/${endPoint}-usa`, headers)
            .then(data => {
                if(data.status === 404) {
                    return dispatch({
                        type: 'error',
                        error: errorMessage
                    })
                } else if(data.status === 200 || data.status === 304) {
                    return data.json()
                }
            })
            .then(res => {
                dispatch({type: 'success',
                res: res
                })
            })
            .catch(err => {
                dispatch({
                    type: 'error',
                    error: `Unexpected turbulence! Please try again later. Error: ${err}`
                })
            })             
} 
  ```

## User Stories 

✈️ As a potential traveler (individual or with a group/business team) who is deciding between two travel destinations, I want to be able to compare the two cities' qualities, so that I can choose the city I will travel to based on the qualities I am or my group is interested in/need.

✈️ As an Airbnb, Kayak or GetYourGuide user, I want to know more about my potential destinations before I search for lodging/car rentals/tours/guides, so I know which city to type in these websites' search inputs.

✈️ As a travel site user, I want a home button to clear my previous searches, so that I can compare two other cities or one with another city.

✈️ As a travel site user, I want to be able to access booking sites to the corresponding city I choose, so that I can easily book lodging, flights, and any other potential travel essentials I need for my destination.



## Future Goals

* Finding an image collection API based on cities to incorporate into results page
* Allowing users to compare more cities
