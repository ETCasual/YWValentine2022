import { Box, Center, Flex, ScaleFade } from '@chakra-ui/react';

export const GridBox = ({ data, answers, d }) => {
  return (
    <Center key={d} w="1000px" h="115px" bg="pink" rounded={'2xl'} shadow="xl">
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
          {data[d] ? (
            <Flex flex="row" justifyContent={'center'} alignItems="center">
              {answers[d]}
              <Box
                display="flex"
                flex="row"
                justifyContent={'center'}
                alignItems="center"
                rounded="full"
                bg="#cf90f7"
                textColor={'blue'}
                marginLeft="50px"
                paddingX="15px"
              >
                {9 - d} PTS
              </Box>
            </Flex>
          ) : null}
        </ScaleFade>
      </Center>
    </Center>
  );
};
