import axios from 'axios'
import { ValidationResponse } from '../types/types'

const NUMVERIFY_URL = 'https://apilayer.net/api/validate'
const NUMVERIFY_ACCESS_KEY = '585011f67d8d05a8d5d6c56b3dfd7641'

const validatePhone = async (
  number: string,
): Promise<ValidationResponse | null> => {
  try {
    const response = await axios.get(
      `${NUMVERIFY_URL}?number=${number}&access_key=${NUMVERIFY_ACCESS_KEY}`,
    )

    return response.data
  } catch (err) {
    console.error(`Numverify validation request error: ${err}`)
  }

  return null
}

export default validatePhone
