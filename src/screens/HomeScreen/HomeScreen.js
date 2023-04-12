import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
  BackHandler,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import styles from './HomeScreen.style';
import GlobalColors from '../../../utils/GlobalColors';
import strings from '../../../utils/constants/lng/LocalizedStrings';
const width = Dimensions.get('window').width;
const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [Categories, setCategoires] = useState([
    {
      id: 1,
      name: 'Mobile',
      image:
        'https://images.priceoye.pk/xiaomi-redmi-note-11-pakistan-priceoye-jek47.jpg',
      subCat: [
        {
          id: 1,
          name: 'Charger',
        },
        {
          id: 2,
          name: 'Headfone',
        },
      ],
    },
    {
      id: 4,
      name: 'Vehicle',
      image:
        'https://media.rivian.com/rivian-main/image/upload/f_auto/q_auto:eco,w_1000,c_fit/v1665606407/rivian-com/home%20page/vehicle-picker/R1T-3_bssdoz.png',
      subCat: [
        {
          id: 1,
          name: 'Hybird',
        },
        {
          id: 2,
          name: 'Automatic',
        },
      ],
    },
    {
      id: 5,
      name: 'Property',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80',
      subCat: [
        {
          id: 1,
          name: 'Resident',
        },
        {
          id: 2,
          name: 'Commercial',
        },
      ],
    },
    {
      id: 6,
      name: 'Animals',
      image:
        'data:image/jpeg;base64,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',
      subCat: [
        {
          id: 1,
          name: 'Cats',
        },
        {
          id: 2,
          name: 'Dogs',
        },
        {
          id: 3,
          name: 'Parrots',
        },
      ],
    },
    {
      id: 7,
      name: 'Furniture',
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhYZGBgaHBgaHBwYHBocGBoaGBgaHBoaGBocIC4lHB4rIRkaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGDEhISE0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQxNDQ0MTQ0NDQ0MTQ0NDQ0NDQ0NDQ0NP/AABEIAOoA1wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAQMEBQYAB//EAE4QAAIBAgIECQYJBwwCAwAAAAECAAMRBCESMVFhBQYiQXGBkaHwEzJSscHRQmJyc4KSstLhFCMkU5Oz8QcVJTM0Q1RjoqPC0xaDF0Rk/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAAIBBQEBAQEAAAAAAAAAAQIRMQMSIUFRMhOBYf/aAAwDAQACEQMRAD8A9AiGLEM0AaNvDaNtIM+h5rXkkHcO31HnkYZ5DK+sjWBuz1m1h1nmtJFEBRogZbLc/bce2c91s6Du74QIghb+4+w88K+7uM0hdIeDEIHj+MVfGRisd3dAAAeCZxA8E+6FYbO4+6cV8eBAbtv7zOPT3wrdHf7ohHR46oCaY2984MPBiFR4tF6+4QCJ3wCd8UP0eOudcbu6AIii/i06+71RLyo438GLEud8UCDZVEInxeJo+LQr+LQBuN3bENvB/GFfxYzj4yMICw39p986GANnd+E6BdxDFMaeqqkAkAsbC/Odg3yjmkbEvojLMnIDafdzncI/VcAEkgAC5J1ADWZEQEnTYWJyAOtV12OwmwJ6hzSX4sUyJt69fqv0dgkhR4zjKNnqkhHki0o6Y6pysc+s3HQbQVeOA+M/fGguh6Oe46/Vn1XnJOvAqM50dFgudySNI2schmOe2e6Bgf5P+MlerVejXZ30rsrG50GGtTYWVSBlqAI+NPQD0zw/hfhKszshchUZ1CIAlMaLEZIgC33m5POZ6zxV4dXF4dXOTryKgA1OBrG5hmOsc0qRa23zs9vf+Mc0vFoBbxY+6RQFT0ztE7+yFnuigQge3s/CAx6Y5o9EFgN0AATv7J3b2TuzsnX8ZQri05ROBPi0JG3SoLr9sUDp7T7oYeN4qqERmJZQOdVLkb9FQSR1QggOYbL2vzbdUJV8ZzL1sfUcciulZciB5Goj3Oohx5m9hcjWJnMVisSli1eodIk6Gm/KVeZWPLFtWkVvmLscpNj00LvnTzFeMGbFCVY2PKUto3LGzAtokWbKwF7qciDpdJ3RO6PYzKTjN5lP5Y9UuzM/xtF0pj4/MSCDbaMxGfDePKwLabkfAQ5/GcZ26FyJ32HMY48TDUVRdFb2F7XJJzJOs58855qCkTp748g8XjKeMo8PGUgNR4yh5bu6Ap8WhgwCvCUxBOuPBgeFcOLbE191aqP9xpO4ocO/kmIDG/k3srj4vMwHOy6x1jnmnrcSGq4ivUqGwaq7oFZQGVnLXLG5GR1BeuaDCcUMOoF6dMW9EaTE73qEnsAi3/hJ9rRLmAQbggEEZgg5gjPMTinTApoqKEVQqqLAC9gBqAmb4W43pQqvS8nVZl0blFUg6Sq2V2By0gNUDS2i2G+Y4cfE/UYn6i/fnf8AniW/qMR9RPvwNgRA0JkDx9Tno4j6iffgnj/S/V1h0on34PLX28eDE8eM5i2/lBoDWlX6lP8A7In/AMhUPRqD6KffgbVj4vOWVfBHDK4hFdQwDXyYWPJYqb2JGsbZZI3T2QHgT4tCB6O6Ap6eyEp8eDCCblCxJI2XtfpIzHVK/F4UAWRdJibDUM8gSNbEAEX0iwOQAJYSyXrldwvgtMBkDlwQBo4ipQABy/uw2lrOtb57NREPhbBUPJ6NRELLYXChnS5B0aSecxy5Tc+Zz1Kkrf5uqqcrgjVoVa1TRJvpNdRTNyLDnPVOhHopkDhLCJUChweSbixIzk8xitNWbagAY25hjVGnMCkR9sfVt3qkdH8ZR9T4tMqeXrhgiNg+MooPi4gOgiKHjQy290UP090B4NFLDZ3QAfFhEJG3ugNVOgdhme4vJfhXEfNeoYeaCoBt7pn+Lh/pXEfNezDROT0bo/yiA/8A1bf+wX+xLCjx6Rhlh2vvcW7beyeY4cnnFjzg8x5xnLvg/V1zpI57a7hTjyKdPTbD3F1FtPb9CQuCOOy4qqKVOiFYhiNMXHJBJzVr6ua3XMzxva2HUbXXuVz7oz/JoQcSwKgnQLBiBdSOTyTzXDESZTysr1QuPQXs/GROFFU4eudBRalUIsNiNJYWReGMsLij/kVv3bSKyfENyKSjP4f22mzVumYziOlqYHytvO7TZr0zLQx190dWNA7/AFQlbxcQHhadUcjVYnYzWv2KT2AxE6z1iZ/hLHtUbydEErytJwFbS0SAyUaZYB20jol2OgpNiS2QJUfhzhmtTIH5R5NcyPJ0g7MMh8J2fInPSVebM3tElRiKVQUKhRX5RTSYshc8rJtIBiwyADEkMGBUBbBek2y9WMZqR1o2820aMYcx55GqGBR0x098kqN8iI2erv8AxkpH8eDMrTqxy+8RlHHgj3xzS3HujQW+8Qgw298b0umEH8W/CAYff3wtPxeDpjwDOLjwPwgM1W6O2Z/iw/8ASuJ+bHetD3S/rOPAPumc4rG/CuKP+Wn2afuicnpccNcVKOJdqmm6VGCjSGiyHRyuyGxY2FvOGobLSmxPFGpRRXpOa92sVVNAhbMdPzzcXAGXpAzaXkmgCOjm6/Hqm2NPHONlCoaaL5N76d7aLXyUjZvnfyf4WvTxOk1FwhVkZiCoW9iDmOVqtYbb809dx7ebnt9krcRgg+YZ0OslCuf1lIku6s17MpwpSNYUNP8AOFS4UgjkjYSLE68hsOyLw5/ZMV8xW/dtGsFwDTp1jX0qjuVCAuVbRGd9CyjRvc5aszHuH/7HivmKv2GgrL8RjamOvPpdpsb+LzH8SbeT5uf7TTWFxumWjgHjwZzOFUszBVAJJJsABrJJNgIK1B4I9pkeuQxuTZUuzNlZAuZKjncW84+bbLO9gi43hjMomQUBndwbIlwDyMjcgmytY8k3UjWziVW4pMDYjTrBTrFuTQDHztJmVDt0nvbSEDgJi1OpVZCNNzorlcLT5QQ5m5JGhc62Ln4Us8JSAVGbMtp1Wa3nE6Oje+QyKN8qnfKZZ5EmCdVYaVJtNi7hlYFnJGp1YWVQFVRo+aijfOkV+FGrWFK/kzflBVYvb9Ur2VlB11HshyCgsQR0DXtAeG0badVMOZFqGSnMhVTIKWnUG7WZKV+iRqUfB8eBMtHlfdC0t3rgKd/cYQPgaUILT3eO2cpGzuESdc+LwHBbYeyKT4tG+qKT090BqsOmZ3iq39J4v5CfZT3S+r9F/HRM/wAUj/SOLPxU+yInJeGzLSXVLBeQBfLzr21jZnq8HUYiLcjpk1Wm2VfwjUC8ptQHtkJOElJAANs8zbmtqF94lhjmGnbcPaZEqUUdlY611EMV6siMr2PUJm7UODdi7qSbZkX+VzDmyPdG+MSkYPFfM1PsNDWlo1tMXINugXyPsMTjK36Fivmn+yZIVmOJdgh6d207ZqtKZbiUB5O9rnoO0zUMw2d1plRLU3euMY5+SqhfOZRust30TubR0fpw0z/hC0b818wdTawQR6oC0kVEVAMlYHPWbPpAnrzh6ClAhGVtHUDcZAix13A58oVz4/GKD4zgAMIjCzpdfQIuCRqL386w1DUObUCOjoO7u/CdCaXLRpjHXMZczoGXMhVjJVQyHWMKpqQ3HWfXJCdfZIdPnzGs83rkpWHpDumVSQB/GKUGzujQ+UIeW7tEI7RO31wgh3eOmAAf4/hFXqkgWx2L3RSTsXqtB0rbJ2l4ylCVKbETB4pcbh8VWegdHT0cwqNdQBzOptzzeAdHaIy+GBz0R3QMYOH+Fx/e/wCih/1x1eMHC/67p/N0P+ua04RedPVFGFX0T3e+TdPDHtw5wqTfyp/Z0f8Arhfz9wqPhrbelL7gmwGEX0e8e+CcGno9/wCMu6eGRXjJwr6aH6FP2LGMfw7wlVpvScpoOpVrKAbEZ2PNNm2FTZ2/xnfkqbB3e+TdPCp4pYR6dMadgTY2F5oWMaRAur1/jOLbx465Q8AIYXd3GMi3pCECNo7QJkEUPNFsdo74Fr6vYYVs+aAQDDZ3e6dI9TEIrBLFmIuFVWvYfCuBkN/P226Bp3kdzH3MjuZ0gYqSHWMlOZErQKKm5vr5z65LRm6ZCSpYnXrPMdvTJiPfn9cyqSjGE3jVGg8MP4tCCA8fwhEb4FyefuMNRvgcL7Yp8ZQh1d063R3QBHV3zh1Qwu+F1iA2R0RQOiFo7xC0Ojx1wG7HdO0T4Ec0d8BgN3jqgNENs7oh0vAhFNwgMogdc+BAZjugnq8dcEMPH4TIfRzu8dUMt4yjCt4zjiP4tANR0+OiH42d8BX8WjeJqhVJ0rHO2iLnUdQN8+o9BgV2NxOgQBTI0zf84abBzbM6BJqEgLzWAtrOqdKnC8KIzeUJbSFiukHN0YMA12ABLCzajYWUWC5pG4zt6a5kZ2h1nkKvVnRolSpI9Yxlquccc5SbFEhzOY1nnElIL7O0e0RimwuchrPrksOArNbJRf2AdpmN68rrd0kYfDu5so78h7JYpwXtJmco8P1hYDRA2BV90tsBww7+eBbbb3TH9I6fys8u4XP5OhfR0lW1+awOV8htt2yqTh5DmE7/AHTWV6S1KbI2aurKehhY+ueQ4aqyXVvOUlT8pTY94jK31VxmPuN0nDA9D/UY4vC49D/WZkaeKj64rfOfdl9dOzD41K8LJfzP9Rjv840/RPb+EyYxENcTHdl9OzH41H85J6J+t+E7+cU9E/W/CZc4mAcVJ3ZfT+ePxp34VQfAP1vwketw3THwD9aZx8VIlSszEAayQANpOQmpll9S44z03fAxXEKW0SovYZ67ZE6ss7jqlq/Ayka2HX+EXgrCrTpqg1KAL7bDWfXIOK4wursqKtgdZ1zffqeXLt3fEQ8fhHpmz3sdRGo9+R3SOme/pMmvw47DRdVZWyI1d8isgU5ZiwI6CLiaxymXDOWNx5GinmHePZHbHf6/ZGVbojqv4zlZEB4tGKtMvpi5FlKg6rMy3JGWuxWx3mPafg64AcIrHZpNzatf4dQgZ+uWRqgTSUBKS6C25OiWsgBspAWxuc7EEWBtFh4fBCr5ZX87yhZibnMpS0MvRsXtsuJ0jP8AjZ4upaVWIxEkcI1rGZ/GYqauTciTSxF3lmDlMxgKxLzTUjlJKWK1NZyOs7ZIqJ+Zc23dgv7ZDDi5GWs+uTmscM53tq+Ssxn+W8eYoqKy3waWHWPbKygkt8KOT1j1NOHt6cuF9hX5E8gxj/pFf56t+8eetI2jTYnmvPFjiNJ3f0ndvrOT7Z3nDhOVirwhVMhLW3xTiF2jtEzpractaOLXlZ+ULtHaIS4pfSHaI0u1kasE1JBGJX0h2iL+UrtEaNphqRzg9r16I/zKf21lca42x3B1wtWk2ypTPUHUmJEtews9kmYxKctumaRhdBbYJQYleWfHNOeXLWHBikmYk6rT5FM2vyLfVO7pkaitiOkSTjqipRpOxCqEckm+QAUk5Tp0+WOrwaCDZaEF8XlavDdDa/7Gv9yc3DtC2tx/6a/3J204LNRbx+MQkeLyrbhqh6T/ALGt9ycOFaRz/O/sa/3I0LdQLkgZnWba9kWVv870hzVf2Ff7k6NCXwvUOkZQYiXnCvnmUdeYvLc4BgzZhNVhzkJlMNk01GCNxLiVXjzjlzn1ye/9mbpPslZVJ0jmdZ1AbZYaX6MdfnHX1bJjP8t4/qK3DpLegvIHSPUZU4cS6oMAt2OV/wAPbOE5d8uELjljzRw2gnn1WFNe8s3QB6xKLi/xeQINKmrna4B9fsl7VwHlqwrVslQaNNDbkre5ZvjsQOgADmvLinVQagMp2uU4cJKi4bgtVGSKPkqB6hJqYW2oDsinGjdbqhLjFPOO2Xuhqu8gdsLyO89sA4sbR2zhixfWI3DVGcODrEA4NOdR2RwYobRO/K12xuJqotXgqi2TU0b5SIfWJn+G+KNJlOhTCNnYpybfRGXdNScQu0QTil2iTZ5V/F3GmpQCvlUp8hx8ZefoIseuR8UOWYWJo6D+Xp67WdRqdRncD0xrG3MbCFrgFtIG4IBB5iCLg9FrTGTpga8neHwzhhUw6072Dq6X2aSgXsdc4m+Ud4TySna/wtW4Ca6fLPU4Q+DcaKYFKpWfTVFJqAXUry+U6tcA8hhe+eV73j9HjICmkKOKIyIc4dypU890UAi273SkddOvUW5Glh0U7bM9Ue2GuIq0hh6KtTBCPSDhGV9FFDIWHlLMw0bZ5WZgQQbTvK4WJlPhai76QTG2a+kqU6xXSsAxQ2uoy1ADVqFzCWvhUIGhjAeVYNh6w1m+iFVVG7ISYnDuJXMeR32pMAdWZtW8X2WAeTjJif8A8/7N/wDvl3E1UVOEcM3m08YPkUqygnxzAxYGH4w4g1aq2oHRZbXpO3n01Y6P566i/Nn1ap0bNA4V88ykr88u+FfPMpK5nK8us4M09c1HB/miZenrmn4P80RCzwr6l9I9J27eiSz/AGY/K37RKmpiqZZrOlrn4Y280tqDBsKSpB5Z1G4yI55M/wAtYfqIuGEnViQqHYxPXaw9d+oSLhwJKxOYUfK7hOEd6dp12PPHdI2veRqKmTAmUJTAqMOcxzSbaYAqoD5yfWX3whVQ35afXX3xqpuFBbXc9sM1G2mJ5RLZun1198UVE5np/XT3y6qbgQ7ekYjlr6zONZB8NPrp7535TT53T66e+NU3CVarBdZjWGqttPbCeshyDofpL74mhYx5WaSBVIOuVmD8xd2kvUjug+zJ5bKQ8AvJv8er++qS+k15SQsHhnJKIy+Hr+jHAJE4zVVRKGkQL6drm3oe+b6bHU4U6N+kt80n26kbx39dhvlVRq/yX90jJik8uTpp/VoL3yyd9++Li66+Uw50lIDPz5D8y+udnHS1IPN6zCQN/En3SI+Kp+mh+kvvhJiqdvPp/WA9sm107CAirX6aX7u3snSHhsUnla3LQX8nblAfAzsZ0u2dL7hc8syjqm8uOGW5cpmmMuXXHhyCLwjwidDyKHMjlkbPQHt7Nsg4/F6I0VPKP+kbemQqAa2syAxhz0dOU1/Aa2wTDXy3/wCMyV9oPUffNTwC18I9je1RtevzaZmbxW5zEjDJzyTiPgfT+yJGw7yTXfJOk+qco605RGUXhUfo1f5tx2rb2waN4fCY/R63yGlx5jOXDwrECzGNR3EHlGNCe146WdOvOvA6LaJFEiwVMXYDfPc6aWVAOZE+ws8OoecvSPXPdmGS5X5CfYE49b07dL2S26R8F5n0637+pHKgtGMC/I+nW/f1Jx9OvtLLSu44rdMPYE/1mWv9XJpMjcbWsuHF+Z/+E3j7Zy9MeuGY1bWUcgHP5Z2GLisFZqOoXdhkCP7tzt3SWj/nx82e5x745jWXSofOH91Umt+WPSK+Db0vb64w2HYcw6xb1ETQWQ+LQDQTZ7Znua1GTVDp1LD0NQ3Hb0Tpf0kHlquQto0T31B7J033M9q04bflyixOJ0RtJ1D2ndLDjBiArkn+O6Z9EZzpE593QIy5JwVKVzci5OsmSUp21RUoMI+lO+3uk21IjOm6XfAFTRw9Vfjg/WRR/wAZXNhr/CPdHeDlKCopvygp2+YT96S3cWTytaDyS9S4GeYvl02vn1SspVI6rzm63ytqFWFwjV/Rq/zbeyV1OrF4RrWw1cnVoN6pceWMuHj1Q3JgRbGLoGex4wzoegZ3kzIaoBFBjgpGEKBjayUlA8tflD1z3MvkB8VPsieHiiws1tWfZnPZKj2sfir9kTj1vTt0vZyo9xrjFA6C2vfN2+u7vbq07dUaeraA9QXnF1TWqXz5pF42oX8gAbWRyfpFLajugGtcGROMtbSqoukQFpoN1zpNq6xN4xnJT4vDOLMj8sAgc4sbEqRc86jZqlTSxdao6qzIjq+SlPiNyszmLXFt4l6iNfJr9FpVcOYZkKVlHLVgMxrBuBfrIHXOmN9OeU9pnkMRf+uQdFMe+Rcc2LRSy1Fa2sBEBtt1GT8HV8qoZSbHIg61Ya1OWsR1qL7TJvVXUsReB8SrKXDFmNtJmyNwLaNhkLbBtvzxJBxGDq0GNSkLhsmXm3GdL2y+U7rPCwxenXqF7WF+SNg37zzybhsIRrt7Yq+yS6c55V0kImG8COjDk814/RkgyNID8HvsHXIlfBVFzUBjYjR0rXvvsbc3ZLWoc45zRtGdQ4j9Qfrp7o+r4j/Dj9ovsWW9TXOGuNrpULWxP+HX9qPuQsWtetSamUFPSFiQ4bK4vlojWMuuWwgtzR3a9JrbIpxTPOw7DJCcVl2k9VvXNKnjuhmXvqfzjODiungwTxaUbB65pXOqFT5o7qdsZY8W9k4cWX2TW04qao7qnbGQbi0+wW6Za1MTiQADh9KyqtxUQXsoF7EZXte0uKhjFSN7NaUzYjE/4b/cT3QfyrFf4b/dX7sumjmINkJGR3Rs8/VLp4k+dhwm81UPda/ZErcHVKjtUcjSa2QvYAKFUA8+QHMJNQ6umOPzRbpZNoicF21t3mOVMGrKVN2BFiLki2w7o97/AGyV+EkpVEnFXD86W+k/q0o5/wCM4QfAHa33paYnmgHVN236zqK4cW8L+rHWWv650lP4750ndfpqP//Z',
      subCat: [
        {
          id: 1,
          name: 'Chair',
        },
        {
          id: 2,
          name: 'Table',
        },
      ],
    },
    {
      id: 8,
      name: 'Fashion',
      image:
        'https://www.economy.pk/wp-content/uploads/2020/11/Fashion-Icon.jpg',
      subCat: [
        {
          id: 1,
          name: 'T-shirts',
        },
        {
          id: 2,
          name: 'Pents',
        },
      ],
    },
    {
      id: 9,
      name: 'Books',
      image:
        'https://images.priceoye.pk/xiaomi-redmi-note-11-pakistan-priceoye-jek47.jpg',
      subCat: [
        {
          id: 1,
          name: 'NoteBook',
        },
        {
          id: 2,
          name: 'Novels',
        },
      ],
    },
    {
      id: 9,
      name: 'Books',
      image:
        'https://images.priceoye.pk/xiaomi-redmi-note-11-pakistan-priceoye-jek47.jpg',
      subCat: [
        {
          id: 1,
          name: 'NoteBook',
        },
        {
          id: 2,
          name: 'Novels',
        },
      ],
    },
  ]);
  const [MyAds, setMyAds] = useState([
    {
      id: 1,
      title: 'Dell Laptop',
      description: 'Good condition 10/10 everything okay!',
      price: 'Rs500000',
      location: 'Sialkot,Punjab',
      date: '22 March, 2023',
      image:
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61enrCge7ML.jpg',
    },
    {
      id: 2,
      title: 'Iphone 11 Pro max',
      description: 'Good condition 10/10 everything okay!',
      price: 'Rs200000',
      location: 'Lahore,Punjab',
      date: '24 March, 2023',
      image:
        'https://cdn.homeshopping.pk/product_images/t/186/iphone-11-pro-max-midnight-green-select-2019__01793_zoom.png',
    },
    {
      id: 3,
      title: 'House For Rent',
      description: 'Good condition 10/10 everything okay!',
      price: 'Rs15000',
      location: 'Lahore,Punjab',
      date: '23 March, 2023',
      image:
        'data:image/jpeg;base64,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',
    },
  ]);
  // const {Categories} = useSelector(state => state.ProfileInfo);
  // const {MyAds} = useSelector(state => state.ProfileInfo);
  const [_banners, setBanners] = useState([
    {
      description: 'The first Blender Open Movie from 2006',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      ],
      subtitle: 'By Blender Foundation',
      thumb:
        'https://img.freepik.com/free-photo/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market_342744-1481.jpg',
      title: 'Elephant Dream',
    },
    {
      description: 'The first Blender Open Movie from 2006',
      sources: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      ],
      subtitle: 'By Blender Foundation',
      thumb:
        'https://www.crbgroup.com/wp-content/uploads/2021/11/Warehouse-Featured-Image-1280-1920x640.jpg',
      title: 'Elephant Dream',
    },
  ]);

  const renderItem = ({item}) => {
    const isSelected = selectedItem && selectedItem.key === item.key;
    return (
      <View style={{paddingLeft: '2%'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SubCategories', {param: item.subCat}),
              setSelectedItem(item),
              console.log('data is ', item.subCat);
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'grey',
          }}>
          <Image
            source={{uri: item.image}}
            style={[styles.itemImage, isSelected && styles.selectedItemImage]}
          />
        </TouchableOpacity>
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {item.name}
        </Text>
      </View>
    );
  };
  const renderApp = ({item}) => {
    const isSelected = selectedItem && selectedItem.key === item.key;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddScreen', {data: item}),
              setSelectedItem(item);
          }}
          style={{
            width: 170,
            height: 130,
            borderRadius: 25,
            backgroundColor: 'grey',
            margin: '5%',
          }}>
          <Image
            source={{uri: item.image}}
            style={{width: 170, height: 80, resizeMode: 'contain'}}
          />

          <Text style={{color: 'white', alignSelf: 'center', fontSize: 14}}>
            {item.title}
          </Text>
          <Text style={{color: 'white', alignSelf: 'center', fontSize: 10}}>
            {item.price}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: '10%',
            }}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 8}}>
              {item.location}
            </Text>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 8}}>
              {item.date}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const Footer = () => {
    return (
      <View style={styles.indicatorContainer}>
        {/* Indicator container */}
        {/* Render indicator */}

        {_banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: GlobalColors.green,
                width: 30,
              },
            ]}
          />
        ))}
      </View>
    );
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const RenderItem = ({item}) => {
    return <Image style={styles.sliderImgM} source={{uri: item.thumb}} />;
  };

  if (_banners == undefined || _banners === '') {
    return (
      <ActivityIndicator
        style={{flex: 1, alignSelf: 'center'}}
        size="large"
        color="black"></ActivityIndicator>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{strings.HOME}</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={[styles.imageContainerFull, {backgroundColor: 'white'}]}>
            <AppIntroSlider
              data={_banners}
              contentContainerStyle={styles.contentContainer}
              onMomentumScrollEnd={updateCurrentSlideIndex}
              renderPagination={() => null}
              renderItem={RenderItem}
            />
            <Footer />
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: 'white',
                paddingBottom: '22%',
              }}>
              <View style={{padding: '5%', width: '100%'}}>
                <FlatList
                  data={Categories}
                  renderItem={renderItem}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <FlatList data={MyAds} numColumns={2} renderItem={renderApp} />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
};

export default HomeScreen;
