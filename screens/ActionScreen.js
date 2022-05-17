import React from 'react';
import {
   Box, VStack,
   Center,
   Text, Pressable,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { VictoryPie } from 'victory-native';

const ActionScreen = ({ onClose, site }) => {
   const {
      sna,
      sbi,
      sarea,
      mday,
      lat,
      lng,
      ar,
      bemp,
   } = site;

   const getTime = (m) => {
      const mday = String(m);
      const year = mday.slice(0, 4);
      const month = Number(mday.slice(4, 6));
      const date = Number(mday.slice(6, 8));
      const hour = Number(mday.slice(8, 10));
      const min = Number(mday.slice(10, 12));
      const sec = Number(mday.slice(12));
      const time = `${year}/${month}/${date} ${hour}:${min}:${sec}`;
      return time;
   }
   return (

      <VStack h="50%" w="100%" bg="blueGray.50" borderRadius={20} >
         <Pressable onPress={onClose} position="absolute" top={2} right={3}>
            <MaterialCommunityIcons name="close" color="#7588E5" size={30} />
         </Pressable>
         <Box borderBottomColor={"white"} w={"15%"} h={1} borderRadius={3} bg="grey" mt={3} alignSelf="center"></Box>
         <Text fontSize="lg" my={6} fontWeight={'bold'} color="#7588E5" textAlign="center">{sna}站</Text>
         <Center px={6} >
            <Text mt={2} fontWeight={'bold'} color="#14226A"><Text color="#7588E5">地址：</Text>{sarea}{" "}{ar}</Text>
            <Text mt={2} fontWeight={'bold'} color="#14226A"><Text color="#7588E5">經度/緯度：</Text>{Number(lng).toFixed(2)}/{Number(lat).toFixed(2)}</Text>
            <Text mt={2} fontWeight={'bold'} color="#14226A"><Text color="#7588E5">更新時間：</Text>{getTime(mday)}</Text>
            <Center>
               <VictoryPie
                  width={250}
                  height={250}
                  colorScale={["#7588E5", "#C8CBD8"]}
                  data={[
                     { x: 1, y: Number(sbi), label: `可借(${sbi})` },
                     { x: 2, y: Number(bemp), label: `可還(${bemp})` },
                  ]}
                  style={{
                     // data: {
                     //    fillOpacity: 0.9, stroke: "#c43a31", strokeWidth: 3
                     // },
                     labels: {
                        fontSize: 12, fill: "#14226A",
                        padding: 10,

                     }
                  }}
               />
            </Center>
         </Center>

      </VStack>
   );
};

export default ActionScreen;
