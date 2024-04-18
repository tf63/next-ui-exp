import { AlphaSlider, Center, SaturationSlider } from '@yamada-ui/react'
import { Autocomplete, AutocompleteOptionGroup, AutocompleteOption } from '@yamada-ui/react'
import { Button, ButtonGroup } from '@yamada-ui/react'
import { Wrap } from '@yamada-ui/react'
import { Slider } from '@yamada-ui/react'
import {
    Carousel,
    CarouselSlide,
    CarouselControlNext,
    CarouselControlPrev,
    CarouselIndicators
} from '@yamada-ui/carousel'

const Demo = () => {
    return (
        <div>
            <AlphaSlider />
            <Button>Click me!</Button>
            <Autocomplete placeholder="キャラクターを選択">
                <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
                <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
                <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </Autocomplete>
            <Wrap gap="md">
                <Button colorScheme="primary" variant="solid">
                    Solid
                </Button>
                <Button colorScheme="secondary" variant="outline">
                    Outline
                </Button>
                <Button colorScheme="warning" variant="ghost">
                    Ghost
                </Button>
                <Button colorScheme="danger" variant="link">
                    Link
                </Button>
                <Button variant="unstyled">Unstyle</Button>
            </Wrap>
            <Wrap gap="md">
                <Button isLoading colorScheme="primary">
                    Button
                </Button>
                <Button isLoading colorScheme="secondary" loadingIcon="dots">
                    Button
                </Button>
                <Button isLoading colorScheme="warning" variant="outline">
                    Button
                </Button>
                <Button isLoading colorScheme="danger" variant="ghost">
                    Button
                </Button>
                <Button isLoading loadingText="Loading..." colorScheme="primary">
                    Button
                </Button>
                <Button
                    isLoading
                    loadingText="Loading..."
                    loadingPlacement="end"
                    loadingIcon="grid"
                    colorScheme="secondary"
                    variant="outline"
                >
                    Button
                </Button>
            </Wrap>
            <Slider />
            <Carousel>
                <CarouselSlide as={Center} bg="primary">
                    1
                </CarouselSlide>
                <CarouselSlide as={Center} bg="secondary">
                    2
                </CarouselSlide>
                <CarouselSlide as={Center} bg="warning">
                    3
                </CarouselSlide>
                <CarouselSlide as={Center} bg="danger">
                    4
                </CarouselSlide>
            </Carousel>
            <SaturationSlider />
        </div>
    )
}

export default Demo
