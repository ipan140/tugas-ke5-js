import { Heading, Text, Center, Image, Box } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import { ScrollView as GluestackScrollView } from "@gluestack-ui/themed";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <GluestackScrollView>
      <Header title={"News"} withBack={true} />
      <Image
        source={{ uri: params.image }}
        w="100%"
        h="20%"
        alt="Image Data"
      />
    <Box
      style={{
        width: '100%', // Panjang garis horizontal
        height: 1,       // Ketebalan garis (dalam piksel)
        backgroundColor: 'black', // Warna garis
      }}
    />
    <Box p={10}>
            <Text textAlign="left">{params.date}</Text>
            <Heading TextAlign="Left" fontSize={"$md" } fontWeight="bold">{params.title}</Heading>
            <Text fontSize={"$md"}>{params.content}</Text>
    </Box>
    </GluestackScrollView>
  );
};

export default NewsDetail;