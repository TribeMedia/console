import * as React from 'react'
import {PricingPlan} from '../../../types/types'
import PopupWrapper from '../../../components/PopupWrapper/PopupWrapper'
import PricingColumn from '../PricingColumn'
import {withRouter} from 'react-router'
import {Icon} from 'graphcool-styles'

interface Props {
  currentPlan: PricingPlan
  router: ReactRouter.InjectedRouter
  params: any
  location: any
}

class ChangePricingPlan extends React.Component<Props, {}> {

  plans: [PricingPlan] = ['Developer', 'Startup', 'Growth', 'Pro', 'Enterprise']

  render() {

    return (
      <PopupWrapper
        onClickOutside={this.close}
      >
        <style jsx={true}>{`
          .container {
            @p: .bgWhite, .flex, .flexColumn, .itemsCenter, .pb60, .ph16, .buttonShadow;
            width: 990px;
          }
        `}</style>

        <div className='flex itemsCenter justifyCenter w100 h100 bgWhite90'>

          <div className='container'>
            <div
              className='flex justifyEnd w100 pointer pt38'
              onClick={() => this.close()}
            >
              <Icon
                className='mh25 closeIcon'
                src={require('../../../assets/icons/close_modal.svg')}
                width={25}
                height={25}
              />
            </div>
            <div className='f38 fw3 mb60'>Change your plan</div>
            <div className='flex'>
              {this.plans.map((plan, i) => {
                return (
                  <PricingColumn
                    key={i}
                    className='mh10'
                    plan={plan}
                    isCurrentPlan={i === 1}
                    onSelectPlan={this.selectPlan}
                  />
                )
              })}
            </div>

          </div>
        </div>

      </PopupWrapper>
    )
  }

  private close = () => {
    this.props.router.goBack()
  }

  private selectPlan = (plan: PricingPlan) => {
    this.props.router.push(`/${this.props.params.projectName}/settings/billing/confirm-plan`)
  }

}

export default withRouter(ChangePricingPlan)