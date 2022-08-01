import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import Geolocation from "react-native-geolocation-service";
// Redux
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import { AUTH_LOGOUT } from "../reduxs/actions/action-types";
// import { AUTH_LOGOUT } from "../reduxs/actions/action-auth";

const Home = ({ navigation }) => {
  // Dummy Datas
  const dispatch = useDispatch();
  const { roleName } = useSelector(({ auth: { roleName } }) => ({
    roleName,
  }));

  console.log(roleName);

  useEffect(() => {
    // console.log('ASDASDAasdasdS')
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setCurrentLocation({
          streetName: roleName,
          gps: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
        // console.log(position)
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 100000,
      }
    );
  }, [roleName]);

  // const initialCurrentLocation = {}

  const categoryData = [
    {
      id: 1,
      name: "Create Event",
      icon: icons.calendar,
    },
    {
      id: 2,
      name: "Create Community",
      icon: icons.bicycle,
    },
    {
      id: 3,
      name: "Create Bengkel",
      icon: icons.tools,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: "Deddy Bike",
      rating: 4.8,
      categories: [3],
      priceRating: affordable,
      photo: images.deddy1,
      location: {
        latitude: -6.921199525125861,
        longitude: 107.61851843633634,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Amy",
      },
      menu: [
        {
          menuId: 1,
          name: "Crispy Chicken Burger",
          photo: images.deddy2,
          description: "Service & Repair",
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: "Crispy Chicken Burger with Honey Mustard",
          photo: images.deddy3,
          description: "Service & Repair",
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: "Crispy Baked French Fries",
          photo: images.deddy4,
          description: "Service & Repair",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: "KOSKAS BANDUNG",
      rating: 4.3,
      categories: [2],
      priceRating: affordable,
      photo: images.kaskus1,
      location: {
        latitude: -6.921199525125861,
        longitude: 107.61851843633634,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Amy",
      },
      menu: [
        {
          menuId: 1,
          name: "Crispy Chicken Burger",
          photo: images.kaskus2,
          description: "Service & Repair",
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: "Crispy Chicken Burger with Honey Mustard",
          photo: images.kaskus3,
          description: "Service & Repair",
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: "Crispy Baked French Fries",
          photo: images.kaskus4,
          description: "Service & Repair",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 3,
      name: "Bengkel sepeda pak arya",
      rating: 4.0,
      categories: [3],
      priceRating: affordable,
      photo: images.kaskus1,
      location: {
        latitude: -6.942884,
        longitude: 107.679593,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Amy",
      },
      menu: [
        {
          menuId: 1,
          name: "Crispy Chicken Burger",
          photo: images.kaskus2,
          description: "Service & Repair",
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: "Crispy Chicken Burger with Honey Mustard",
          photo: images.kaskus3,
          description: "Service & Repair",
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: "Crispy Baked French Fries",
          photo: images.kaskus4,
          description: "Service & Repair",
          calories: 194,
          price: 8,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState({
    streetName: roleName,
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  });

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1 }}>Create</Text>
        <Text style={{ ...FONTS.h1 }}>Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() => {
          if (item.categories[0] === 1) {
            navigation.navigate("Event", {
              item,
              currentLocation,
            });
          } else if (item.categories[0] === 2) {
            navigation.navigate("Community", {
              item,
              currentLocation,
            });
          } else if (item.categories[0] === 3) {
            navigation.navigate("Restaurant", {
              item,
              currentLocation,
            });
          }
        }}
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* Rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            {item.categories.map((categoryId) => {
              return (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ ...FONTS.body3 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
                    {" "}
                    .{" "}
                  </Text>
                </View>
              );
            })}

            {/* Price */}
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}
              >
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  console.log(selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Button
          text={"Keluar"}
          onPress={() => {
            dispatch({ type: AUTH_LOGOUT });
            // navigation.navigate('LoginScreen')
          }}
          backgroundColor={"red"}
        />
      </View>
      {/* {renderRestaurantList()} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
