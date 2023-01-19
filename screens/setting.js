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
const setting = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

    
  

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
            MAD PROJECT
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
          Notification
        </Text>
        {/* <View style={{paddingHorizontal: 16}}>
          {product ? product.map(renderProducts) : null}
        </View> */}


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
              Recent Activity
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
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.white,
            borderRadius: 10,
            marginRight: 22,
          }}>
          <Image
            source={images.secret}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
                


                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#0A0A0B",
                      fontWeight: '500',
                      ...FONTS.body2, 
                    }}>
                    The secret book has been added in new arrival
                  </Text>

                    {/*  start */}
                

                    <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 10,
                  ...FONTS.body3
                }}>
                
              </Text>               
              <Text>
                price: 500
              </Text>
            </View>
                    {/* end of pricee */}




                    {/* start of dots */}

            <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* <View
                style={{
                  borderRadius: 100,
                  marginRight: 30,
                  marginTop:10,
                  marginLeft:80,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  opacity: 1,
                }}>
               
              </View> */}
              {/* <Text style={{marginTop:10}}>1</Text>
              <View
                style={{
                    marginTop:10,
                  borderRadius: 100,
                  marginLeft: 30,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  opacity: 1,
                }}>
                
              </View> */}

              </View>
              </View>



                    {/* end of dots */}



                   
                </View>
              </View>
              
            </View>
          </View>
          
        
        </View>



      </ScrollView>


{/* view of add to cart button */}
      {/* <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
           onPress={() => navigation.navigate('MyCartdetails')}
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
            CHECKOUT (Rupees 500)
          </Text>
        </TouchableOpacity>
      </View> */}


    </View>
  );
            };

export default setting;