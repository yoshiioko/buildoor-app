import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors App</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          {/* NavBar */}
          <NavBar />
          <Spacer />
          <Center>
            {/* If connected, the second view, otherwise the first */}
          </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/adrianisawank"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
