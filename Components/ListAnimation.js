import React ,{useState  , useEffect}from 'react'
import { StyleSheet, Text, View  , TouchableOpacity   , Animated  , Easing} from 'react-native';
const ListAnimation = () => {


    // Data to show on List 
    const data = [
        {
            title : "MS Dhoni Hit for Six "
        },{
            title : "Messi hit for goal "
        },
       
        {
            title : "Virat Kohli Run Machine"
        },
        {
            title : "Adhbhut De Villers "
        },
        {
            title : "Pathan Shahrukh Khan "
        },
        {
            title : "Sachin : The God of Cricket"
        },
        {
            title : "Thala for a Reason ",
            
        }
    ]


    const [renderedItems, setRenderedItems] = useState([]);

    const renderItemsWithDelay = () => {
      data.forEach((item, index) => {
        setTimeout(() => {
          setRenderedItems(prevItems => [...prevItems, item]);
        }, index * 1000); 
      });
    };

    useEffect(() => {
     
  
      renderItemsWithDelay();
    }, []);
  
    return (
      <View style={{ marginTop: 25 }}>
        {renderedItems.map((item, index) => (
          <AnimatedListItem item={item}  key={index}/>
        ))}
      </View>
    );
}



// List Item Component
const AnimatedListItem = ({ item }) => {
    const [slideAnim] = useState(new Animated.Value(-500));

    useEffect(() => {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, []);
  
    return (
      <Animated.View  style={{ transform: [{ translateX: slideAnim }]  , elevation : 10 , padding : 10 , 
      margin : 10  , backgroundColor : "white"  }}>
        <Text>{item.title}</Text>
      </Animated.View>
    );
  };

export default ListAnimation