import { Box, Center, Flex, ScaleFade } from '@chakra-ui/react';

export const GridBox = ({ data, answers, d }) => {
  return (
    <Center key={d} w="400px" h="250px" bg="gold" rounded={'2xl'} shadow="xl">
      <Center fontSize="50px" fontFamily={'noto'}>
        {!data[d] ? (
          <Box
            display="flex"
            flex="row"
            justifyContent={'center'}
            alignItems="center"
            rounded="full"
            bg="blue"
            textColor={'white'}
            boxSize="70px"
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
            >
              {answers[d].ans}
            </Flex>
          )}
        </ScaleFade>
      </Center>
    </Center>
  );
};
