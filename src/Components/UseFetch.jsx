import React, { useState, useEffect } from "react";



const UseFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch.then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return { data };

}

export default UseFetch
