import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.header}></View>

      <View style={styles.containerBuckets}>
        <Text style={styles.titlePrincipal}>Buckets</Text>
        <ScrollView horizontal={true} style={styles.buckets}>
          <View style={[styles.contBucket, styles.green]}>
            <Text style={styles.title}>Illustration</Text>
          </View>
          <View style={[styles.contBucket, styles.blue]}>
            <Text style={styles.title}>Interface</Text>
          </View>
          <View style={[styles.contBucket, styles.orange]}>
            <Text style={styles.title}>Design Graphic</Text>
          </View>
          <View style={[styles.contBucket, styles.purple]}>
            <Text style={styles.title}>Web Develop</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.containerShots}>
        <Text style={styles.titlePrincipal}>Shots</Text>
        <View style={styles.shots}>
          <View style={styles.contShots}>
            <Image
              style={styles.imageShot}
              source={{
                uri: "https://picsum.photos/300/200",
              }}
            ></Image>
          </View>
          <View style={styles.contShots}>
            <Image
              style={styles.imageShot}
              source={{
                uri: "https://picsum.photos/300/200",
              }}
            ></Image>
          </View>
          <View style={styles.contShots}>
            <Image
              style={styles.imageShot}
              source={{
                uri: "https://picsum.photos/300/200",
              }}
            ></Image>
          </View>
          <View style={styles.contShots}>
            <Image
              style={styles.imageShot}
              source={{
                uri: "https://picsum.photos/300/200",
              }}
            ></Image>
          </View>
          <View style={styles.contShots}>
            <Image
              style={styles.imageShot}
              source={{
                uri: "https://picsum.photos/300/200",
              }}
            ></Image>
          </View>
          <View style={styles.contShots}>
            <Image
              style={styles.imageShot}
              source={{
                uri: "https://picsum.photos/300/200",
              }}
            ></Image>
          </View>
          <View style={styles.contShots}>
            <Image
              style={styles.imageShot}
              source={{
                uri: "https://picsum.photos/300/200",
              }}
            ></Image>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={[styles.card, styles.blue]}>
          <View style={styles.cardRow}>
            <View style={styles.containerImage}>
            <Image
              style={styles.imageCard}
              source={{
                uri: "https://picsum.photos/60/60",
              }}
            ></Image>
            </View>
            <View style={styles.containerInfo}>
              <Text style={[styles.white, styles.font18]}>David Borg</Text>
              <Text style={styles.white}> is simply dummy text of the printing </Text>
            </View>
          </View>
          <View style={styles.cardWidth}>
            <View style={styles.cardCenter}>
              <Text style={styles.align}>400 <br />Numero</Text>
              <Text style={styles.align}>400 <br />Numero</Text>
              <Text style={styles.align}>400 <br />Numero</Text>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.green]}>
          <View style={styles.cardRow}>
            <View style={styles.containerImage}>
            <Image
              style={styles.imageCard}
              source={{
                uri: "https://picsum.photos/60/60",
              }}
            ></Image>
            </View>
            <View style={styles.containerInfo}>
              <Text style={[styles.white, styles.font18]}>David Borg</Text>
              <Text style={styles.white}> is simply dummy text of the printing </Text>
            </View>
          </View>
          <View style={styles.cardWidth}>
            <View style={styles.cardCenter}>
              <Text style={styles.align}>400 <br />Numero</Text>
              <Text style={styles.align}>400 <br />Numero</Text>
              <Text style={styles.align}>400 <br />Numero</Text>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.purple]}>
          <View style={styles.cardRow}>
            <View style={styles.containerImage}>
            <Image
              style={styles.imageCard}
              source={{
                uri: "https://picsum.photos/60/60",
              }}
            ></Image>
            </View>
            <View style={styles.containerInfo}>
              <Text style={[styles.white, styles.font18]}>David Borg</Text>
              <Text style={styles.white}> is simply dummy text of the printing </Text>
            </View>
          </View>
          <View style={styles.cardWidth}>
            <View style={styles.cardCenter}>
              <Text style={styles.align}>400 <br />Numero</Text>
              <Text style={styles.align}>400 <br />Numero</Text>
              <Text style={styles.align}>400 <br />Numero</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#b93ffa",
    width: "100%",
    height: 40,
  },
  containerBuckets: {
    padding: 10,
  },
  containerShots: {
    padding: 10,
  },
  titlePrincipal: {
    fontSize: 25,
    marginBottom: 10,
  },
  buckets: {},
  shots: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contBucket: {
    marginRight: 10,
    backgroundColor: "blue",
    width: 130,
    height: 80,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contShots: {
    width: "46%",
    backgroundColor: "blue",
    height: 120,
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    overflow: "hidden",
  },
  title: {
    color: "white",
  },
  imageShot: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  green: {
    backgroundColor: "#8eef9d",
  },
  blue: {
    backgroundColor: "#4c92ff",
  },
  orange: {
    backgroundColor: "#fbb274",
  },
  purple: {
    backgroundColor: "#a95af8",
  },
  // Cards Full
  card: {
    backgroundColor: "red",
    marginRight: 10,
    marginLeft: 10, 
    borderRadius: 20,
    overflow: "hidden",
    padding: 10,
    marginBottom: 10,
  },
  cardRow:{
    flexDirection: "row",
    display: "flex", 
    flex: 1
  },
  containerImage: {
    width: "20%",
  },
  containerInfo: {
    width: '80%'
  },
  cardCenter:{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  imageCard: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 50
  },
  white: {
    color: "white",
  },
  font18: {
    fontSize: 18,
    fontWeight: "bold",
  },
  align:{
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    textAlign: "center",
  }


});

export default Home;
