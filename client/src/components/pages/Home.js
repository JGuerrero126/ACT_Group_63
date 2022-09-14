import React, { useEffect } from "react";
import { useState } from "react";
import { Text, Heading, Link, Divider, Box, Flex } from "@chakra-ui/react";
import axios from "axios";

function Home() {
  const [profileData, setProfileData] = useState(null);
  const [genres, setGenres] = useState(null);

  function getData() {
    axios({
      method: "GET",
      url: "/profile",
    })
      .then((response) => {
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  // function getGenres() {
  //   axios({
  //     method: "GET",
  //     url: "/",
  //   })
  //     .then((response) => {
  //       const res = response.data;
  //       setGenres(res);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.log(error.response);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       }
  //     });
  // }

  // useEffect(() => {
  //   getGenres();
  // }, []);

  useEffect(() => {
    setGenres([
      "Action",
      "Animation",
      "Comedy",
      "Crime",
      "Documentation",
      "Drama",
      "Family",
      "Fantasy",
      "Horror",
      "Music",
      "Reality",
      "Romance",
      "Sci-Fi",
      "Sport",
      "Thriller",
      "War",
      "Western",
    ]);
  }, []);

  return (
    <div>
      <Heading fontSize="2rem">
        Here's all the Genres you can look through!
      </Heading>
      <Text fontSize="2rem">This is the Home Page.</Text>
      <Flex flexWrap="wrap" justify="center">
        {genres
          ? genres.map((element) => {
              return (
                <div>
                  <Box
                    key={element}
                    // border="0.5rem groove grey"
                    // bg="lightblue"
                    fontSize="1.25rem"
                    w="10rem"
                    h="5rem"
                  >
                    <Link
                      href={"/genres/" + element.replace(/-/, "").toLowerCase()}
                      color="black"
                      textDecoration="none"
                      _hover={{ color: "red", textDecoration: "underline" }}
                    >
                      <Text>{element}</Text>
                    </Link>
                  </Box>
                </div>
              );
            })
          : []}
      </Flex>
      {/* <Link fontSize="1.5rem" href="/genres/test">
        Click Here to go the Genre Page.
      </Link>
      <p>Test call to db for "profile": </p>
      <button onClick={getData}>Click me</button>
      {profileData && (
        <div>
          <p>Profile name: {profileData.profile_name}</p>
          <p>About me: {profileData.about_me}</p>
        </div>
      )}
      <Divider border="null" w="80%" />
      <Text fontSize="1.5rem" color="red">
        Below this is the dynamic data test, it may look strange.
      </Text>
      <Flex flexWrap="wrap">
        {genres
          ? genres.map((element) => {
              return (
                <Box
                  key={element}
                  border="0.5rem groove grey"
                  bg="lightblue"
                  fontSize="1.25rem"
                  w="10rem"
                  h="5rem"
                >
                  <Link
                    href={"/genres/" + element.replace(/-/, "").toLowerCase()}
                    color="black"
                    textDecoration="none"
                    _hover={{ color: "red", textDecoration: "underline" }}
                  >
                    <Text>{element}</Text>
                  </Link>
                </Box>
              );
            })
          : []}
      </Flex> */}
    </div>
  );
}

export default Home;
