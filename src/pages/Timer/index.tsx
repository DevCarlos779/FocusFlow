import { useEffect, useState } from "react";
import { Button, ButtonsStopContainer, CountdownConteiner, InputConteiner, SeparetorConteiner, TimerContainer } from "./styles";
import { differenceInSeconds } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { is } from "zod/v4/locales";
import { HandPalm, Pause, Play } from "phosphor-react";

const NewCycleTimerSchema = z.object({
    timeMinutes: z.number()
});

type NewCycleTimerInput = z.infer<typeof NewCycleTimerSchema>;

export function Timer() {

    

    const {
        register,
        reset,
        formState: {
            isSubmitting
        },
        handleSubmit
    } = useForm<NewCycleTimerInput>({
        resolver: zodResolver(NewCycleTimerSchema)
    })

    const [startDate, setStartDate] = useState<Date>(new Date());
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
    const [isStop, setIsStop] = useState(false);

    useEffect(() => {
        
        const interval = setInterval(() => {
            
            console.log(isStop)
            if(!isStop) {
                console.log("entrou aq1")
                const secondsDifference = differenceInSeconds(new Date(), new Date(startDate))

                if(secondsDifference >= totalSeconds) {
                    
                    clearInterval(interval);
                    setAmountSecondsPassed(totalSeconds);
                    setTotalSeconds(0);
        
                } else {
                    console.log("entrou aq")
                    setAmountSecondsPassed(secondsDifference);
                }
            }
            
        
                        
        }, 1000)
        
        return () => {
            clearInterval(interval);
        }
        
        
    
    }, [totalSeconds, startDate, isStop]);

    const currentSeconds = totalSeconds != 0 ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, "0");
    const seconds = String(secondsAmount).padStart(2, "0");

    function handleStartNewCycle(data: NewCycleTimerInput) {
        setTotalSeconds(data.timeMinutes * 60);
        setStartDate(new Date());
        reset();
    }

    function interromperCiclo() {
        if (!isStop) {
            // ⏸ Pausa — só marca o estado e guarda o progresso atual
            setIsStop(true);
        } else {
            // ▶️ Retomar — recalcula o novo startDate baseado no tempo já passado
            setStartDate(new Date(Date.now() - amountSecondsPassed * 1000));
            setIsStop(false);
        }
    }

    function encerrarCiclo() {
        setTotalSeconds(0);
        setAmountSecondsPassed(0);
    }

    return (
        <TimerContainer onSubmit={handleSubmit(handleStartNewCycle)}>
            <InputConteiner>
                <label htmlFor="timeMinutes">Por quantos minutos pretende focar: </label>

                <input 
                    type="number" 
                    id="timeMinutes" 
                    required
                    min={1}
                    max={60}
                    placeholder="0"
                    {...register("timeMinutes", {valueAsNumber: true})}
                    disabled={totalSeconds != 0}
                />

                <p>Minutos</p>
            </InputConteiner>
            
            <CountdownConteiner>
                <span>{minutes[0]}</span>
                <span>{minutes[1]}</span>
                <SeparetorConteiner>:</SeparetorConteiner>
                <span>{seconds[0]}</span>
                <span>{seconds[1]}</span>   
            </CountdownConteiner>

            {
                totalSeconds == 0 ?

                <Button type="submit" disabled={isSubmitting}>
                    <Play size={24} />
                    Start Timer
                </Button>
            
                :

                <ButtonsStopContainer>
                    {isStop ? 
                        <Button onClick={interromperCiclo}>
                            <Play size={24} />
                            Retomar
                        </Button>
                        :
                        <Button onClick={interromperCiclo}>
                            <Pause size={24} />
                            Interromper
                        </Button>
                    }
                    
                    <Button onClick={encerrarCiclo}>
                        <HandPalm size={24} />
                        Encerrar
                    </Button>
                </ButtonsStopContainer>
                
                
            }
            

        </TimerContainer>
    )
}