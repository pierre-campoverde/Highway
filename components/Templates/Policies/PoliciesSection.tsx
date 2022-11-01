import RentPoint from "components/Organisms/RentPoint";
import React from "react";
import { useIntl } from "react-intl";

const PoliciesSection = () => {
  const intl = useIntl();
  return (
    <section className="py-5 w-full sm:w-8/12   ">
      <RentPoint
        topic={intl.formatMessage({
          id: "page.policies.paymentPolicies-title",
        })}
      >
        <p>
          {intl.formatMessage({ id: "page.policies.paymentPolicies-text1" })}
        </p>
        <p>
          {intl.formatMessage({ id: "page.policies.paymentPolicies-text2" })}
        </p>
        <p>
          {intl.formatMessage({ id: "page.policies.paymentPolicies-text3" })}
        </p>
        <p>
          {intl.formatMessage({ id: "page.policies.paymentPolicies-text4" })}
        </p>
      </RentPoint>
      <RentPoint
        topic={intl.formatMessage({
          id: "page.policies.bookingPolicies-title",
        })}
      >
        <p>
          {intl.formatMessage({
            id: "page.policies.bookintPolicies-text1",
          })}
        </p>
        <p>
          {intl.formatMessage({
            id: "page.policies.bookintPolicies-text2",
          })}
        </p>
        <p>
          {intl.formatMessage({
            id: "page.policies.bookintPolicies-text3",
          })}
        </p>
        <p>
          {intl.formatMessage({
            id: "page.policies.bookintPolicies-text4",
          })}
        </p>
      </RentPoint>
      <RentPoint
        topic={intl.formatMessage({
          id: "page.policies.insurancePolicies-title",
        })}
      >
        <p>
          {intl.formatMessage({
            id: "page.policies.insurancePolicies-text1",
          })}
        </p>
        <p>
          {intl.formatMessage({
            id: "page.policies.insurancePolicies-text2",
          })}
        </p>
      </RentPoint>
    </section>
  );
};

export default PoliciesSection;
