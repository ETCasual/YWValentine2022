import { Box, Center, Flex, ScaleFade } from '@chakra-ui/react';

export const GridBox = ({ data, answers, d }) => {
  return (
    <Center key={d} w="300px" h="200px" bg="pink" rounded={'2xl'} shadow="xl">
      <Center fontSize="40px" fontFamily={'noto'}>
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
          >
            {d}
          </Box>
        ) : null}
        <ScaleFade in={data[d]}>
          {data[d] == 0 ? null : data[d] == 1 ? (
            <Flex flex="row" justifyContent={'center'} alignItems="center">
              {answers[d].text}
            </Flex>
          ) : (
            <Flex flex="row" justifyContent={'center'} alignItems="center">
              {answers[d].ans}
            </Flex>
          )}
        </ScaleFade>
      </Center>
    </Center>
  );
};
