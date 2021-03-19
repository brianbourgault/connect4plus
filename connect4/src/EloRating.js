import React from 'react'

//TODO: Include this in the games and find a way to store elo values in the user's profile. Have this run at the end of a game with the winning player value as 'd'

export default function EloRating() {
    function probability (rating1, rating2) {
        return (1.0 * 1.0) / (1 + 1.0 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400))
    }

    function calculateElo(ratingA, ratingB, d, K = 32){
        var player2 = probability(ratingA, ratingB)
        var player1 = probability(ratingB, ratingA)
        if (d) {
            ratingA = ratingA + K * (1 - player1)
            ratingB = ratingB + K * (0 - player2)
        } else {
            ratingA = ratingA + K * (0 - player1)
            ratingB = ratingB + K * (1 - player2)
        }

        /*
        console.log(`RatingA = ${Math.round(ratingA * 1000000.0) / 1000000.0} RatingB = ${Math.round(ratingB * 1000000.0) / 1000000.0}`)
        console.log("RatingA = " + Math.round(ratingA * 1000000.0) / 1000000.0 + " RatingB = " + Math.round(ratingB * 1000000.0) / 1000000.0)
        */
    }
    

    return (
        <div>
            
        </div>
    )
}
