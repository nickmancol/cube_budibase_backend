cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,

  segments: {
    Consumer: {
      sql: `${CUBE}.segment = 'Consumer'`
    },
    Corporate: {
      sql: `${CUBE}.segment = 'Corporate'`
    },
    HomeOffice: {
      sql: `${CUBE}.segment = 'Home Office'`
    },
    All:{
      sql: ``
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [orderId, customerId, customerName, country, city, productId, productName, orderDate, shipDate, category, subCategory]
    },

    uniqueOrders: {
      sql: `order_id`,
      type: 'countDistinct',
    },

    customers: {
      sql: 'customer_id',
      type: `countDistinct`
    },
    
    items: {
      sql: `quantity`,
      type: `sum`
    },
    
    discount: {
      sql: `discount`,
      type: `sum`
    },

    sales: {
      sql: `sales`,
      type: `sum`
    },

    profit: {
      sql: `profit`,
      type: `sum`
    },
  },
  
  dimensions: {
    orderId: {
      sql: `order_id`,
      type: `string`
    },
    
    shipMode: {
      sql: `ship_mode`,
      type: `string`
    },

    customerId: {
      sql: `customer_id`,
      type: `string`
    },
        
    customerName: {
      sql: `customer_name`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    postalCode: {
      sql: `postal_code`,
      type: `string`
    },
    
    region: {
      sql: `region`,
      type: `string`
    },
    
    productId: {
      sql: `product_id`,
      type: `string`
    },
    
    category: {
      sql: `category`,
      type: `string`
    },
    
    subCategory: {
      sql: `sub_category`,
      type: `string`
    },
    
    productName: {
      sql: `product_name`,
      type: `string`
    },
    
    orderDate: {
      sql: `order_date`,
      type: `time`
    },
    
    shipDate: {
      sql: `ship_date`,
      type: `time`
    }
  }
});
