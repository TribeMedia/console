import {PricingPlan, PricingPlanInfo} from '../../../types/types'

// should be: [key: PricingPlan]: PricingPlanInfo
export const billingInfo: { [key: string]: PricingPlanInfo } = {
  '2017-02-free': {
    name: 'Free',
    price: 0,
    maxStorage: 250,
    maxRequests: 100000,
    maxSeats: 2,
    pricePerAdditionalMB: -1,
    pricePerThousandAdditionalRequests: -1,
  },
  '2017-02-project': {
    name: 'Project',
    price: 9,
    maxStorage: 500,
    maxRequests: 1000000,
    maxSeats: 5,
    pricePerAdditionalMB: 7,
    pricePerThousandAdditionalRequests: 15,
  },
  '2017-02-startup': {
    name: 'Startup',
    price: 49,
    maxStorage: 2000,
    maxRequests: 10000000,
    maxSeats: 10,
    pricePerAdditionalMB: 6,
    pricePerThousandAdditionalRequests: 12,
  },
  '2017-02-growth': {
    name: 'Growth',
    price: 449,
    maxStorage: 10000,
    maxRequests: 50000000,
    maxSeats: -1,
    pricePerAdditionalMB: 5,
    pricePerThousandAdditionalRequests: 10,
  },
  'enterprise': {
    name: 'Enterprise',
    price: -1,
    maxStorage: -1,
    maxRequests: -1,
    maxSeats: -1,
    pricePerAdditionalMB: -1,
    pricePerThousandAdditionalRequests: -1,
  },
}
