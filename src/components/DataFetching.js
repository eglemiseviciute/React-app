import React from "react";
import Card from "./Card"
import Button from "./Buttons";

export default function DataFetching(){
    const [posts, setPosts] = React.useState([]);
    const [sortType, setSortType] = React.useState("default");

  
    // Sort and Filter 
    const sortedData = React.useMemo(() => {
      let result = posts;
  
      if (sortType === "descending") {
        result = [...posts].sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      } else if (sortType === "ascending") {
        result = [...posts].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      
      }else if (sortType === "small") {
        result = posts.filter(c=>{
            return c.area < 65300;
        });
      
      }else if (sortType === "oceania") {
        result = posts.filter(c=>{
            return c.region === "Oceania";
        });
      
      }
  
      return result;
    }, [posts, sortType]);
  

    // Only fetch data once on component mount...
    React.useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      const data = await response.json();
      setPosts(data);
    };

    return (
      <div className="content">

        <header className="content__header">
          <h1>All Countries</h1>
        </header>

        <div className="wrapper">

          {/* button component */}

          <Button handleClick={(e) => setSortType(e.target.value)}/>
      
           
           {/* card component */}

            {sortedData.map((country) => {
              
              return (
               
                     <Card 
                     name={country.name}
                     region={country.region}
                     area={country.area}
                     />
              );
            })}
        </div>
      </div>
    );
  }
  
  
