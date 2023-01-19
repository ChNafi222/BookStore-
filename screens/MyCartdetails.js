import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
const MyCartdetails = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);


  // const renderProducts = (data, index) => {
  //   return (
  //     <TouchableOpacity
  //       key={data.key}
        
  //       style={{
  //         width: '100%',
  //         height: 100,
  //         marginVertical: 6,
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //       }}>
  //       <View
  //         style={{
  //           width: '30%',
  //           height: 100,
  //           padding: 14,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           backgroundColor: COLOURS.backgroundLight,
  //           borderRadius: 10,
  //           marginRight: 22,
  //         }}>
  //         <Image
  //           source={images.javaprogramming}
  //           style={{
  //             width: '100%',
  //             height: '100%',
  //             resizeMode: 'contain',
  //           }}
  //         />
  //       </View>
  //       <View
  //         style={{
  //           flex: 1,
  //           height: '100%',
  //           justifyContent: 'space-around',
  //         }}>
  //         <View style={{}}>
  //           <Text
  //             style={{
  //               fontSize: 14,
  //               maxWidth: '100%',
  //               color: "",
  //               fontWeight: '600',
  //               letterSpacing: 1,
  //             }}>
              
  //           </Text>
  //           <View
  //             style={{
  //               marginTop: 4,
  //               flexDirection: 'row',
  //               alignItems: 'center',
  //               opacity: 0.6,
  //             }}>
  //             <Text
  //               style={{
  //                 fontSize: 14,
  //                 fontWeight: '400',
  //                 maxWidth: '85%',
  //                 marginRight: 4,
  //               }}>
                
  //             </Text>               
  //             <Text>
  //               (~&#8377;
  //               {data.productPrice + data.productPrice / 20})
  //             </Text>
  //           </View>
  //         </View>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //             alignItems: 'center',
  //           }}>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               alignItems: 'center',
  //             }}>
  //             <View
  //               style={{
  //                 borderRadius: 100,
  //                 marginRight: 20,
  //                 padding: 4,
  //                 borderWidth: 1,
  //                 borderColor: COLOURS.backgroundMedium,
  //                 opacity: 0.5,
  //               }}>
               
  //             </View>
  //             <Text>1</Text>
  //             <View
  //               style={{
  //                 borderRadius: 100,
  //                 marginLeft: 20,
  //                 padding: 4,
  //                 borderWidth: 1,
  //                 borderColor: COLOURS.backgroundMedium,
  //                 opacity: 0.5,
  //               }}>
                
  //             </View>
  //           </View>
            
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: "#F8F8FC",
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            
          </TouchableOpacity>
          <Text
            style={{
              color: COLORS.darkBlue,
              ...FONTS.h3, 
            }}>
            Order Details
          </Text>
          <View>

          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: COLORS.darkRed,
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
            ...FONTS.h1, 
          }}>
          Cart Details
        </Text>
        <View style={{paddingHorizontal: 16}}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.lightBlue,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
                ...FONTS.body2, 
              }}>
              Delivery Location
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: "#051B82",
                    backgroundColor: COLORS.lightGray4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#0A0A0B",
                      fontWeight: '500',
                      ...FONTS.body2, 
                    }}>
                    Comsats Unversity isb
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.darkBlue,
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                      ...FONTS.body4, 
                    }}>
                    park road, isb  
                  </Text>
                </View>
              </View>
              
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.lightBlue,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
                ...FONTS.body2, 
              }}>
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: "#E7E9EF",
                    backgroundColor: "",
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '900',
                      color: "#0A0A0A",
                      letterSpacing: 1,
                      ...FONTS.h4, 
                    }}>
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#0A0A0A",
                      fontWeight: '500',
                      ...FONTS.body3, 
                    }}>
                    Visa Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#0A0A0A",
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                      ...FONTS.body3, 
                    }}>
                    ****-9092
                  </Text>
                </View>
              </View>
              
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.lightBlue,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
                ...FONTS.body2, 
              }}>
              Order Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: "#0A0A0A",
                  opacity: 0.5,
                  ...FONTS.body3, 
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: "#0A0A0A",
                  opacity: 0.8,
                  ...FONTS.body3, 
                }}>
                Rs:{total}500
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: "#0A0A0A",
                  opacity: 0.5,
                  ...FONTS.body3,
                }}>
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: "#0A0A0A",
                  opacity: 0.8,
                  ...FONTS.body3,
                }}>
                Rs:150
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: "#0A0A0A",
                  opacity: 0.5,
                  ...FONTS.body2,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: "#0A0A0A",
                }}>
                Rs : 650
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          // onPress={() => (total != 0 ? checkOut() : null)}
          onPress={() => navigation.navigate('Home')}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: COLORS.primary,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: "#F2F3F8",
              textTransform: 'uppercase',
              ...FONTS.h3,
            }}>
            Confirm Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCartdetails;