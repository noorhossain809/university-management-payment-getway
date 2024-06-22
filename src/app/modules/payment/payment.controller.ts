/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { PaymentService } from './payment.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paymentFilterableFields } from './payment.constant';

const initPayment = async (req: Request, res: Response, next: NextFunction) => {
  const result = await PaymentService.initPayment(req.body);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Payment successfully!!!',
      data: result
    })
};

const webhook = async (req: Request, res: Response, next: NextFunction) => {
  const result = await PaymentService.webhook(req.query);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Payment verified!!!',
      data: result
    })
};

const getAllFromDB = async(req: Request, res: Response, next: NextFunction) => {
  const filters = pick(req.query, paymentFilterableFields)
  const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder'])
  const result = await PaymentService.getAllFromDB(filters, options)

  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Payment fetched successfully!!!',
      data: result
    })
}


const getOneFromDB = async(req: Request, res: Response, next: NextFunction) => {
  const {id} = req.params

  const result = await PaymentService.getOneFromDB(id)

  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Payment fetched successfully!!!',
      data: result
    })
}

export const PaymentController = {
    initPayment,
    webhook,
    getAllFromDB,
    getOneFromDB
}