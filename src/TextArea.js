import { Subtitle, Paragraph, TextSection, FullBleedImage } from './styles'
import React from 'react'

const TRAVERSE_CITY_IMAGE =
  'https://images.squarespace-cdn.com/content/v1/56a8596376d99c0164fc16bd/1578445792801-5BSVWMDMUVWLSHD2AA8R/ke17ZwdGBToddI8pDm48kETsGhw5V0vaG2_dPXh0k_sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dgSTPdVqrdB2uNKPeP1zvLmaV_5iISfNi78mEzwocAj4G6v6ULRah83RgHXAWD5lbQ/TRAVERSE_CITY_MI_DESTINATION4.jpg?format=2500w'

const ISABELLA_IMAGE =
  'https://www.kidsquest.com/wp-content/uploads/2017/06/Soaring-hotel-exterior-3.jpg'

export const IntroText = ({ verticalPadding }) => (
  <TextSection verticalPadding={verticalPadding}>
    <Paragraph>
      We all know COVID-19 has radically shifted consumer spending habits.
    </Paragraph>
    <Paragraph>
      But how is this affecting rural areas? And what does it reveal about the
      strengths and the needs of these areas?
    </Paragraph>
    <Paragraph>
      With support and data from Mastercard, we're able to take a near real-time
      look at these questions play out across Michigan.
    </Paragraph>
    <Paragraph>
      To begin, let's take a big picture look at the overall consumer spending
      index of every county in Michigan which experienced a significant change
      in 2020.
    </Paragraph>

    <div>Scroll to advance the story ↓ </div>
  </TextSection>
)

export const PostLineChartsText = () => (
  <TextSection>
    <Subtitle>
      Why were Grand Traverse & Isabella the only rural counties which saw a
      relative decrease?
    </Subtitle>
    <Paragraph>Let's investigate...</Paragraph>
  </TextSection>
)

export const GrandTraverseImageAndText = () => (
  <>
    <FullBleedImage src={TRAVERSE_CITY_IMAGE} alt="Traverse city bay" />
    <TextSection verticalPadding="112px">
      <Subtitle>Grand Traverse County</Subtitle>
      <Paragraph>
        Grand Traverse County's county seat is Traverse City. It has a
        population of approximately 92k.
      </Paragraph>
      <Paragraph>
        The focal point of the county is Traverse City (in the photo above),
        whose wide reaching tourism is on hold during COVID-19.
      </Paragraph>
    </TextSection>
  </>
)

export const IsabellaImageAndText = () => (
  <>
    <FullBleedImage
      src={ISABELLA_IMAGE}
      alt="Soaring Eagle Casino and Resort"
    />
    <TextSection verticalPadding="112px">
      <Subtitle>Isabella County</Subtitle>
      <Paragraph>
        Isabella county has a population of approximately 70k. Isabella County's
        2 largest employers are Soaring Eagle Casino and Central Michigan
        University, both of which have significantly slowed during COVID-19.
      </Paragraph>
      <Paragraph>
        For more context, let's visit Grand Traverse county and Isabella county
        on the map...
      </Paragraph>
    </TextSection>
  </>
)

export const ConclusionText = () => (
  <TextSection verticalPadding="112px">
    <Paragraph>
      Wrapping up, Mastercard's data lets us spot near real-time trends in
      spending, highlighting where to deploy our own rural-focused data to fill
      in the larger picture.
    </Paragraph>
    <Paragraph>
      This is just the start. We're eager to use data and our on-the-ground
      expertise to help rural America respond to the COVID-19 pandemic.
    </Paragraph>
  </TextSection>
)
