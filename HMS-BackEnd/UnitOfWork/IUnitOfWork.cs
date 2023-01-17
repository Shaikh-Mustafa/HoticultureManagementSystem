﻿using HMS_BackEnd.Interface;

namespace HMS_BackEnd.UnitOfWork
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository { get; }

        IProductRepository ProductRepository { get; }
        IStockRepository StockRepository { get; }

        Task<bool> SaveAsync();
    }
}
