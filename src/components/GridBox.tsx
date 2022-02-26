import { Box, Center, Flex, ScaleFade } from '@chakra-ui/react';

export const GridBox = ({ data, answers, d }) => {
  return (
    <Center
      key={d}
      w="400px"
      h="300px"
      rounded={'2xl'}
      // shadow="xl"
      // filter="blur-lg"
      paddingX="8"
      style={{
        backgroundColor: `${
          !data[d] ? 'rgba(255,215,0)' : data[d] == 1 ? 'rgba(0, 0, 139)' : 'rgba(0, 128, 0)'
        }`,
        boxShadow: `0px 0px 15px 10px ${
          !data[d]
            ? 'rgba(255,215,0,0.5)'
            : data[d] == 1
            ? 'rgba(0, 0, 139, 0.5)'
            : 'rgba(0, 128, 0, 0.5)'
        }`,
      }}
    >
      <Center fontSize="50px" fontFamily={'noto'}>
        {!data[d] ? (
          <Box
            display="flex"
            flex="row"
            justifyContent={'center'}
            alignItems="center"
            rounded="full"
            bg="white"
            textColor={'black'}
            boxSize="100px"
            padding="4"
            fontWeight="bold"
            textAlign={'center'}
          >
            {d}
          </Box>
        ) : null}
        <ScaleFade in={data[d]}>
          {data[d] == 0 ? null : data[d] == 1 ? (
            <Flex
              flex="row"
              justifyContent={'center'}
              alignItems="center"
              fontWeight="bold"
              textAlign={'center'}
              fontSize={'40px'}
              textColor="white"
            >
              {answers[d].text}
            </Flex>
          ) : (
            <Flex
              flex="row"
              justifyContent={'center'}
              alignItems="center"
              fontWeight="bold"
              textAlign={'center'}
              fontSize={'40px'}
              textColor="white"
            >
              {answers[d].ans}
            </Flex>
          )}
        </ScaleFade>
      </Center>
    </Center>
  );
};
