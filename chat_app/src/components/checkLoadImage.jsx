import axios from 'axios'

import React from 'react'

const CheckLoadImage = (path) => {
    return axios.get(path).then((response) => {
        console.log(response)
        
    }).catch((error) => {
        console.log(error)
    })
}

export default CheckLoadImage
