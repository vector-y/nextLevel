import React from 'react'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Container from '../components/Container'

export default function Portfolio({posts}){
    return (
        <>
            <Head>
                <title>Blog | Victor Tran</title>
                <Container>
                    <Stack
                    as="article"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    w="100%"
                    px={2}
                    >
                        <Flex
                            flexDirection="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            maxWidth="700px"
                            w="100%"
                        >
                            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                                Blog
                            </Heading>
                            {/* <Flex
                                justify="space-between"
                                align={['initial', 'center']}
                                direction={['column', 'row']}
                                mt={2}
                                w="100%"
                                mb={4}
                            >
                                <Flex align="center">
                                    <Avatar
                                        size="xs"
                                        name="Benjamin Carlson"
                                        src="../images/portrait.jpeg"
                                        mr={2}
                                    />
                                    <Text fontSize="sm" color={textColor[colorMode]}>
                                        {frontMatter.by}
                                        {'Victor Tran / '}
                                        {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                                    </Text>
                                </Flex>
                                <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                                    {frontMatter.readingTime.text}
                                </Text>
                            </Flex> */}
                        </Flex>
                        {children}
                    </Stack>
                </Container>
            </Head>
        </>
    )
}

export async function getStaticProps() {
    // TODO fetch blog posts
    return { props: { posts } }
}