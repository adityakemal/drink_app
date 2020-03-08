import React from 'react'

import {
    ActivityIndicator,
    Text,
    View
} from 'react-native'

export default function Loading() {
    return (
        // <View style={{flex : 1}}>
            <View style={{ height: '100%', width: '100%', position: 'absolute', zIndex: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <ActivityIndicator size="large" color='maroon'/>
                <Text>loading..</Text>
            </View>

        // </View>
    )
}