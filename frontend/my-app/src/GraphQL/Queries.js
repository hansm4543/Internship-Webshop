import {gql} from '@apollo/client';

export const LOAD_CATEGORIES = gql`
    query {            
        categories{
            name
            }
  }
`;

export const LOAD_CLOTHES = gql`
    query {
        category(input: { title: "clothes" }) {
          name
          products{
            id
            name
            inStock
            gallery
            description
            
            brand
            prices{
              currency{
                label
                symbol
              }
              amount
            }
            attributes{
              id
              name
              type
              items{
                displayValue
                value
                id
              }
            }
          }
        }
      }
      
`;
export const LOAD_ALL = gql`
    query {
        category(input: { title: "all" }) {
          name
          products{
            id
            name
            inStock
            gallery
            description
            
            brand
            prices{
              currency{
                label
                symbol
              }
              amount
            }
            attributes{
              id
              name
              type
              items{
                displayValue
                value
                id
              }
            }
          }
        }
      }
      
`;
export const LOAD_TECH = gql`
    query {
        category(input: { title: "tech" }) {
          name
          products{
            id
            name
            inStock
            gallery
            description
            
            brand
            prices{
              currency{
                label
                symbol
              }
              amount
            }
            attributes{
              id
              name
              type
              items{
                displayValue
                value
                id
              }
            }
          }
        }
      }
      
`;