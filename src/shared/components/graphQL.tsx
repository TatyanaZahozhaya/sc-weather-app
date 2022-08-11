import { SharedComponents, SharedTypes, Paths, Theme, Rocket } from '@shared';

export const Forecast5Days = () => {
    const {
        spacing: { s, l },
        palette: { secondaryBackgroundColor },
    } = Theme.useStyledTheme();

    const { data, fetching, error } = Rocket({ id: 'falcon9' });

    /*   
    const [newRocket, setNewRocket] = useState<IRocketOutput | undefined>(undefined);
    const [isLoading, setLoading] = useState(true);
useEffect(() => {
        if (data) {
            setNewRocket(data.rocket);
            setLoading(false);
        }
    }, [data]); 
    
    if (fetching || isLoading || !newRocket) {
        return (
            <SharedComponents.GridContainer gridTemplateColumns="1fr">
                <SharedComponents.Text text={'Loading...'} />
            </SharedComponents.GridContainer>
        );
        }*/
        
    if (fetching) return <p>Loading.. </p>;
    if (error) return <p>Oh no.. {error.message}</p>;
    if (!data?.rocket) return <p>Not found...</p>;

    console.log(data, 'ok');

    return (
        <div>
            <SharedComponents.FlexContainer
                justifyContent="space-between"
                margin={`${l} auto`}>
                <SharedComponents.ForecastHeader />
                <SharedComponents.FlexContainer
                    justifyContent="right"
                    gap={s}>
                    <SharedComponents.LinkButton
                        ariaLabel="Link to Home page"
                        text="HOME"
                        to={Paths.HOME}
                    />
                    <SharedComponents.LinkButton
                        ariaLabel="Link to detailed Forecast for today"
                        text="today"
                        to={Paths.FORECAST_TODAY}
                    />
                </SharedComponents.FlexContainer>
            </SharedComponents.FlexContainer>
            <SharedComponents.Container backgroundColor={secondaryBackgroundColor}>
                <SharedComponents.ForecastTableHeader />
                <p>{`${data.rocket.id} - ${data.rocket.name} - height ${data.rocket.height.meters} meters`}</p>
            </SharedComponents.Container>
        </div>
    );
};
