import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Submited from "../submited/Submited";
import {
  Input,
  DivDateCvc,
  Input2,
  Input3,
  Label,
  Label2,
  DivButton,
  Divelementright,
  Pvalidation,
  Pvalidation2,
} from "./divDown.styled";
const DivDown = ({ setObject }: DivDownProps) => {
  const [nosubmited, setNosubmited] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormInputs>();
  useEffect(() => {
    setValue("name", null);
    setValue("cardnumber", null);
    setValue("day", null);
    setValue("month", null);
    setValue("cvc", null);
  }, [nosubmited]);
  const onSubmit = (data: any) => {
    setObject(data);
    setNosubmited(!nosubmited);
    console.log(data);
  };
  return (
    <>
      {nosubmited ? (
        <Divelementright<any>>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>CARDHOLDER NAME</Label>
            <Input
              type="text"
              placeholder="e.g aleksandre chokheli"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name?.message ? (
              <Pvalidation>{errors.name?.message}</Pvalidation>
            ) : null}
            <Label>CARD NUMBER</Label>
            <Input
              type="number"
              placeholder="e.g 1234 5678 1234 5678"
              {...register("cardnumber", {
                required: "Card Number is required",
                minLength: {
                  value: 16,
                  message: "Please Input exactly 16 number",
                },
                maxLength: {
                  value: 16,
                  message: "Please Input exactly 16 number",
                },
              })}
            />

            <Pvalidation>{errors.cardnumber?.message}</Pvalidation>
            <DivDateCvc>
              <div>
                <Label2>EXP.DATE</Label2>
                <Input2
                  type="number"
                  placeholder="MM"
                  {...register("day", {
                    required: "Can't be blanked",

                    max: {
                      value: 31,
                      message: "to 31",
                    },
                  })}
                />
                <Pvalidation2>{errors.day?.message}</Pvalidation2>
              </div>
              <div>
                <Label2>(MM/YY)</Label2>
                <Input2
                  type="number"
                  placeholder="YY"
                  {...register("month", {
                    required: "Can't be blanked",

                    max: {
                      value: 12,
                      message: "to 12",
                    },
                  })}
                />
                {errors.month?.message ? (
                  <Pvalidation2>{errors.month?.message}</Pvalidation2>
                ) : null}
              </div>
              <div>
                <Label2>CVC</Label2>
                <Input3
                  type="number"
                  placeholder="e.g.123"
                  {...register("cvc", {
                    required: "Can't be blanked",
                    minLength: {
                      value: 3,
                      message: "insert3 numbers",
                    },
                    maxLength: {
                      value: 3,
                      message: "insert 3 numbers",
                    },
                  })}
                />
                {errors.cvc?.message ? (
                  <Pvalidation2>{errors.cvc?.message}</Pvalidation2>
                ) : null}
              </div>
            </DivDateCvc>
            <DivButton type="submit">Confirm</DivButton>
          </form>
          {/* {console.log(DivButton)} */}
        </Divelementright>
      ) : (
        <Submited
          setNosubmited={setNosubmited}
          nosubmited={nosubmited}
          setObject={setObject}
        />
      )}
    </>
  );
};

export default DivDown;

//onClick={() => setNoSubmited(!onSubmit)}
